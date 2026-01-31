import ftplib

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
        
        print("Listing ALL files (LIST -a) in /www:")
        files = []
        try:
            # Try varying commands for hidden files
            ftp.cwd('www')
            ftp.retrlines('LIST -a', files.append) 
            for f in files:
                print(f)
        except ftplib.error_perm as e:
            print(f"Error listing www: {e}")

        ftp.quit()

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
