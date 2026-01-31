import ftplib
import os
import ssl

# Configuration
FTP_HOST = "grivet.ftp.tb-hosting.com"
FTP_USER = "grivettoit@grivettoit"
FTP_PASS = "@Nicotina_1969!!"
LOCAL_ROOT = "c:\\dev\\grivetto.it\\www"

def download_current_dir(ftp, local_dir):
    try:
        if not os.path.exists(local_dir):
            os.makedirs(local_dir)
            # print(f"Ensuring local directory: {local_dir}")

        files = []
        try:
            ftp.retrlines('LIST', files.append)
        except ftplib.error_perm as e:
             print(f"Error listing directory: {e}")
             return

        for line in files:
            parts = line.split(maxsplit=8)
            if len(parts) < 9:
                continue
            
            permissions = parts[0]
            name = parts[8]
            
            if name in ('.', '..'):
                continue

            full_local_path = os.path.join(local_dir, name)

            if permissions.startswith('d'):
                # Directory
                print(f"Entering directory: {name}")
                try:
                    ftp.cwd(name)
                    download_current_dir(ftp, full_local_path)
                    ftp.cwd('..')
                except ftplib.error_perm as e:
                    print(f"Error traversing {name}: {e}")
            else:
                # File
                # print(f"Downloading {name}...")
                try:
                    with open(full_local_path, 'wb') as f:
                        ftp.retrbinary(f"RETR {name}", f.write)
                except Exception as e:
                    print(f"Error downloading {name}: {e}")

    except Exception as e:
        print(f"Global Error in download_current_dir: {e}")

def main():
    try:
        # Connect
        print(f"Connecting to {FTP_HOST}...")
        ftp = ftplib.FTP(FTP_HOST)
        ftp.login(FTP_USER, FTP_PASS)
        print("Logged in.")
        
        # Start download from current root
        download_current_dir(ftp, LOCAL_ROOT)
        
        ftp.quit()
        print("Download complete.")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
