import ftplib
import io

# Configuration
FTP_HOST = "grivet.ftp.tb-hosting.com"
FTP_USER = "grivettoit@grivettoit"
FTP_PASS = "@Nicotina_1969!!"

def list_dir(ftp, path):
    print(f"\n--- Listing {path} ---")
    try:
        files = []
        ftp.cwd(path)
        ftp.retrlines('LIST', files.append)
        for f in files[:10]: # First 10 files
            print(f)
        if len(files) > 10:
            print(f"... and {len(files)-10} more.")
    except Exception as e:
        print(f"Error listing {path}: {e}")

def upload_probe(ftp, path, filename):
    try:
        content = f"Probe file in {path}/{filename}".encode('utf-8')
        if path == "/":
            ftp.cwd("/")
        else:
            ftp.cwd(path)
        ftp.storbinary(f"STOR {filename}", io.BytesIO(content))
        print(f"Uploaded {filename} to {path}")
    except Exception as e:
        print(f"Error uploading to {path}: {e}")

def main():
    try:
        print(f"Connecting to {FTP_HOST}...")
        ftp = ftplib.FTP(FTP_HOST)
        ftp.login(FTP_USER, FTP_PASS)
        print("Logged in.")
        
        # List Root
        list_dir(ftp, "/")
        
        # List public_html
        list_dir(ftp, "/public_html")
        
        # Upload Probes
        upload_probe(ftp, "/", "probe_root.txt")
        upload_probe(ftp, "/public_html", "probe_pub.txt")
        
        ftp.quit()

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
