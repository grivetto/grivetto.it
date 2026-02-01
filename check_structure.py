import ftplib

FTP_HOST = "grivet.ftp.tb-hosting.com"
FTP_USER = "grivettoit@grivettoit"
FTP_PASS = "@Nicotina_1969!!"

def main():
    try:
        ftp = ftplib.FTP(FTP_HOST)
        ftp.login(FTP_USER, FTP_PASS)
        print("Logged in.")
        
        print("Root contents:")
        ftp.retrlines('LIST')
        
        folders = []
        ftp.retrlines('NLST', folders.append)
        
        if "public_html" in folders:
            print("\n'public_html' EXISTS.")
        else:
            print("\n'public_html' DOES NOT EXIST.")
            
        ftp.quit()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
