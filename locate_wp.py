import ftplib

# Configuration
FTP_HOST = "grivet.ftp.tb-hosting.com"
FTP_USER = "grivettoit@grivettoit"
FTP_PASS = "@Nicotina_1969!!"

def search_files(ftp, current_path, targets):
    print(f"Scanning: {current_path}")
    
    try:
        items = []
        # Use simple LIST as MLSD might not be supported or gives partial info
        ftp.retrlines(f'LIST {current_path}', items.append)
        
        for line in items:
            parts = line.split(maxsplit=8)
            if len(parts) < 9: continue
            
            permissions = parts[0]
            name = parts[8]
            
            if name in ('.', '..'): continue
            
            full_path = f"{current_path}/{name}" if current_path != "." else name
            if current_path == "/" : full_path = f"/{name}"

            # Check if this is a target file
            if name in targets:
                print(f"!!! FOUND TARGET !!! {name} found in: {current_path}")

            # Recurse if directory
            if permissions.startswith('d') or "type=dir;" in line: # simplistic check
                # Don't go too deep or into common junk folders
                if name not in ['wp-content', 'wp-includes', 'node_modules', '.git', 'logs', 'cgi-bin']: 
                    search_files(ftp, full_path, targets)

    except ftplib.error_perm as e:
        pass # access denied or not a dir

def main():
    try:
        print(f"Connecting to {FTP_HOST}...")
        ftp = ftplib.FTP(FTP_HOST)
        ftp.login(FTP_USER, FTP_PASS)
        print("Logged in.")
        
        print("Searching for 'wp-config.php' and 'index.php'...")
        search_files(ftp, "/", ['wp-config.php', 'index.php', 'license.txt'])
        
        ftp.quit()

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
