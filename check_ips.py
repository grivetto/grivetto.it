import socket

def get_ip(host):
    try:
        return socket.gethostbyname(host)
    except Exception as e:
        return f"Error: {e}"

print(f"grivetto.it: {get_ip('grivetto.it')}")
print(f"grivet.ftp.tb-hosting.com: {get_ip('grivet.ftp.tb-hosting.com')}")
