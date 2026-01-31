import ftplib
import io

# Configuration
FTP_HOST = "grivet.ftp.tb-hosting.com"
FTP_USER = "grivettoit@grivettoit"
FTP_PASS = "@Nicotina_1969!!"

def main():
    try:
        print(f"Connecting to {FTP_HOST}...")
        ftp = ftplib.FTP(FTP_HOST)
        ftp.login(FTP_USER, FTP_PASS)
        print("Logged in.")
        
        print("Checking /www contents details...")
        files = []
        try:
            ftp.cwd('www')
            ftp.retrlines('LIST', files.append)
            found_index = False
            for f in files:
                print(f)
                if 'index.html' in f:
                    found_index = True
            
            if found_index:
                print("SUCCESS: index.html found in /www")
            else:
                print("FAILURE: index.html NOT found in /www")
                
            # Upload test.txt
            test_content = b"Hello from remote /www/test.txt"
            ftp.storbinary("STOR test.txt", io.BytesIO(test_content))
            print("Uploaded test.txt to /www")
            
        except ftplib.error_perm as e:
            print(f"Error accessing www: {e}")

        ftp.quit()

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
