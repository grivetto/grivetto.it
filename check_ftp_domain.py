import ftplib

# Configuration
# TRYING DOMAIN DIRECTLY
FTP_HOST = "grivetto.it" 
FTP_USER = "grivettoit@grivettoit"
FTP_PASS = "@Nicotina_1969!!"

def main():
    try:
        print(f"Connecting to {FTP_HOST}...")
        ftp = ftplib.FTP(FTP_HOST)
        ftp.login(FTP_USER, FTP_PASS)
        print("Logged in successfully to grivetto.it")
        
        print("Root Listing:")
        ftp.retrlines('LIST')
        
        ftp.quit()

    except Exception as e:
        print(f"Connection failed: {e}")

if __name__ == "__main__":
    main()
