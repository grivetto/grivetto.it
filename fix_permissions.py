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
        
        print("\n--- Current Permissions (Root) ---")
        lines = []
        ftp.retrlines('LIST', lines.append)
        for line in lines:
            if 'www' in line:
                print(line)

        print("\n--- Attempting CHMOD 755 www ---")
        try:
            # Try standard SITE CHMOD
            resp = ftp.sendcmd('SITE CHMOD 755 www')
            print(f"Response: {resp}")
        except Exception as e:
            print(f"CHMOD failed: {e}")
            
        print("\n--- Verifying Permissions ---")
        lines = []
        ftp.retrlines('LIST', lines.append)
        for line in lines:
            if 'www' in line:
                print(line)

        ftp.quit()

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
