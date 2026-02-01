import subprocess
import re

def get_file_at_commit(commit, filename):
    try:
        cmd = ["git", "show", f"{commit}:{filename}"]
        result = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8')
        return result.stdout
    except Exception as e:
        return str(e)

content = get_file_at_commit("0461349", "agenzia-immobiliare/src/components/Footer.tsx")
hrefs = re.findall(r'href="([^"]+)"', content)

with open("old_links.txt", "w") as f:
    for href in hrefs:
        f.write(f"{href}\n")
