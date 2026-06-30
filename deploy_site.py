import ftplib
import os
import ssl

# Configuration
FTP_HOST = "grivet.ftp.tb-hosting.com"
FTP_USER = "grivettoit@grivettoit"
FTP_PASS = "@Nicotina_1969!!"
LOCAL_ROOT = "c:\\dev\\grivetto.it\\agenzia-immobiliare\\dist"

def clean_remote_dir(ftp, dir_path="."):
    """
    Recursively deletes all files and directories in the given remote directory.
    """
    print(f"Cleaning remote directory: {dir_path}")
    
    try:
        # List all files/directories
        items = []
        ftp.retrlines(f'MLSD {dir_path}', items.append)
        
        for item in items:
            parts = item.split(";")
            name = parts[-1].strip()
            type_fact = [p for p in parts if p.startswith("type=")][0]
            
            if name in ('.', '..'):
                continue
                
            full_path = f"{dir_path}/{name}" if dir_path != "." else name

            if "type=dir" in type_fact:
                clean_remote_dir(ftp, full_path)
                print(f"Removing remote directory: {full_path}")
                ftp.rmd(full_path)
            else:
                print(f"Removing remote file: {full_path}")
                ftp.delete(full_path)
                
    except ftplib.error_perm as e:
        print(f"Error listing/cleaning {dir_path}: {e}")
        # Fallback for servers not supporting MLSD
        fallback_clean(ftp, dir_path)

def fallback_clean(ftp, dir_path="."):
    print(f"Using fallback clean for: {dir_path}")
    files = []
    try:
        ftp.retrlines(f'LIST {dir_path}', files.append)
    except Exception as e:
        print(f"Error listing {dir_path}: {e}")
        return

    for line in files:
        parts = line.split(maxsplit=8)
        if len(parts) < 9: continue
        name = parts[8]
        if name in ('.', '..'): continue
        
        full_path = f"{dir_path}/{name}" if dir_path != "." else name
        
        if line.startswith('d'):
            fallback_clean(ftp, full_path)
            try:
                ftp.rmd(full_path)
                print(f"Removed directory: {full_path}")
            except:
                pass
        else:
            try:
                ftp.delete(full_path)
                print(f"Removed file: {full_path}")
            except:
                pass

def upload_dir(ftp, local_dir, remote_dir="."):
    """
    Recursively uploads a local directory to the remote server.
    """
    if not os.path.exists(local_dir):
        print(f"Local directory not found: {local_dir}")
        return

    for item in os.listdir(local_dir):
        local_path = os.path.join(local_dir, item)
        remote_path = f"{remote_dir}/{item}" if remote_dir != "." else item

        if os.path.isdir(local_path):
            print(f"Creating remote directory: {remote_path}")
            try:
                ftp.mkd(remote_path)
            except ftplib.error_perm:
                # Ignore if exists
                pass
            upload_dir(ftp, local_path, remote_path)
        else:
            print(f"Uploading file: {remote_path}")
            with open(local_path, 'rb') as f:
                ftp.storbinary(f"STOR {remote_path}", f)

def main():
    try:
        print(f"Connecting to {FTP_HOST}...")
        ftp = ftplib.FTP(FTP_HOST)
        ftp.login(FTP_USER, FTP_PASS)
        print("Logged in.")

        # Clean remote root of the misplaced files (index.html, vite.svg, assets)
        print("Cleaning root of misplaced files...")
        try:
             # Basic cleanup of root items that shouldn't be there
             files = []
             ftp.retrlines('NLST', files.append)
             for f in files:
                 if f in ['.', '..', 'public_html', 'www']: continue
                 try:
                     if '.' in f: # Assume file
                        ftp.delete(f)
                        print(f"Removed root file: {f}")
                     else: # Assume directory (like assets)
                        try:
                            clean_remote_dir(ftp, f)
                            ftp.rmd(f)
                            print(f"Removed root dir: {f}")
                        except:
                            pass
                 except:
                    pass
        except Exception as e:
            print(f"Cleanup warning: {e}")

        # Ensure www exists
        if "www" not in files:
            print("Creating www...")
            ftp.mkd("www")

        # Clean www
        print("Cleaning www...")
        clean_remote_dir(ftp, "www")

        # Upload new site to www
        print("Starting upload of new site to www...")
        upload_dir(ftp, LOCAL_ROOT, "www")
        
        ftp.quit()
        print("Deployment complete.")

    except Exception as e:
        print(f"Deployment failed: {e}")

if __name__ == "__main__":
    main()
