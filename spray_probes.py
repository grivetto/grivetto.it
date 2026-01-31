import ftplib
import io

# Configuration
FTP_HOST = "grivet.ftp.tb-hosting.com"
FTP_USER = "grivettoit@grivettoit"
FTP_PASS = "@Nicotina_1969!!"

def spray_dir(ftp, current_path, depth):
    if depth > 2: return

    print(f"Scanning: {current_path}")
    
    # 1. Upload probe to current dir
    sanitized_path = current_path.replace("/", "_").replace(".", "")
    if sanitized_path == "_": sanitized_path = "_root"
    filename = f"probe{sanitized_path}.txt"
    
    try:
        content = f"This is the web root for {current_path}".encode('utf-8')
        ftp.storbinary(f"STOR {filename}", io.BytesIO(content))
        print(f"  --> Uploaded {filename}")
    except Exception as e:
        print(f"  xxx Could not upload to {current_path}: {e}")

    # 2. List subdirectories
    try:
        items = []
        ftp.retrlines(f'MLSD {current_path}', items.append)
        
        for item in items:
            parts = item.split(";")
            name = parts[-1].strip()
            type_fact = [p for p in parts if p.startswith("type=")][0]
            
            if name in ('.', '..'): continue
            
            if "type=dir" in type_fact:
                new_path = f"{current_path}/{name}" if current_path != "." else name
                if current_path == "/" : new_path = f"/{name}"
                
                spray_dir(ftp, new_path, depth + 1)
                
    except ftplib.error_perm:
        # Fallback for servers without MLSD
        pass

def main():
    try:
        print(f"Connecting to {FTP_HOST}...")
        ftp = ftplib.FTP(FTP_HOST)
        ftp.login(FTP_USER, FTP_PASS)
        print("Logged in.")
        
        spray_dir(ftp, "/", 1)
        
        ftp.quit()

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
