import ftplib
import os
import ssl

# Configuration
FTP_HOST = "grivet.ftp.tb-hosting.com"
FTP_USER = "grivettoit@grivettoit"
FTP_PASS = "@Nicotina_1969!!"
LOCAL_ROOT = "c:\\dev\\grivetto.it\\www"
REMOTE_TARGET_DIR = "www"

def upload_dir(ftp, local_dir, remote_dir):
    """
    Recursively uploads a local directory to the remote server.
    """
    if not os.path.exists(local_dir):
        print(f"Local directory not found: {local_dir}")
        return

    # Ensure remote dir exists
    try:
        ftp.mkd(remote_dir)
        print(f"Created remote directory: {remote_dir}")
    except ftplib.error_perm:
        pass

    for item in os.listdir(local_dir):
        local_path = os.path.join(local_dir, item)
        remote_path = f"{remote_dir}/{item}"

        if os.path.isdir(local_path):
            upload_dir(ftp, local_path, remote_path)
        else:
            print(f"Uploading file: {remote_path}")
            try:
                with open(local_path, 'rb') as f:
                    ftp.storbinary(f"STOR {remote_path}", f)
            except Exception as e:
                print(f"Error uploading {item}: {e}")

def main():
    try:
        print(f"Connecting to {FTP_HOST}...")
        ftp = ftplib.FTP(FTP_HOST)
        ftp.login(FTP_USER, FTP_PASS)
        print("Logged in.")

        print(f"Starting upload to {REMOTE_TARGET_DIR}...")
        upload_dir(ftp, LOCAL_ROOT, REMOTE_TARGET_DIR)
        
        ftp.quit()
        print(f"Deployment to {REMOTE_TARGET_DIR} complete.")

    except Exception as e:
        print(f"Deployment failed: {e}")

if __name__ == "__main__":
    main()
