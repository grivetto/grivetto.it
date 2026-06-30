import subprocess

cmd = ["git", "log", "--pretty=format:%H", "-n", "10", "agenzia-immobiliare/src/components/Footer.tsx"]
result = subprocess.run(cmd, capture_output=True, text=True)
with open("commit_hashes.txt", "w") as f:
    f.write(result.stdout)
