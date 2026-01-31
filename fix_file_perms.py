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
        
        print("\n--- Checking index.html in /www ---")
        try:
            ftp.cwd('www')
            lines = []
            ftp.retrlines('LIST index.html', lines.append)
            for line in lines:
                print(line)
                
            print("\n--- Attempting CHMOD 644 index.html ---")
            resp = ftp.sendcmd('SITE CHMOD 644 index.html')
            print(f"Response: {resp}")
            
        except ftplib.error_perm as e:
            print(f"Error: {e}")

        ftp.quit()

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
