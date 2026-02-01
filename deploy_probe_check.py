import ftplib
import os

# Configuration
FTP_HOST = "grivet.ftp.tb-hosting.com"
FTP_USER = "grivettoit@grivettoit"
FTP_PASS = "@Nicotina_1969!!"
REMOTE_DIR = "/www"

def main():
    probe_filename = "probe_v1.1.txt"
    with open(probe_filename, "w") as f:
        f.write("Release 1.1 Deployment Check")

    try:
        print(f"Connecting to {FTP_HOST}...")
        ftp = ftplib.FTP(FTP_HOST)
        ftp.login(FTP_USER, FTP_PASS)
        print("Logged in.")
        
        print(f"Uploading {probe_filename} to {REMOTE_DIR}...")
        ftp.cwd(REMOTE_DIR)
        with open(probe_filename, "rb") as f:
            ftp.storbinary(f"STOR {probe_filename}", f)
        
        print("Upload complete.")
        ftp.quit()

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
