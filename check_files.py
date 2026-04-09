import re, os
from pathlib import Path

js_path = Path(r'C:\Users\Administrator\.qclaw\workspace\portfolio\js\main.js')
base_path = Path(r'C:\Users\Administrator\.qclaw\workspace\portfolio')

js_content = js_path.read_text(encoding='utf-8')
matches = re.findall(r'images/[^\'"\s]+\.(?:png|jpg)', js_content)
files = list(set(matches))

missing = []
for f in files:
    full_path = base_path / f.replace('/', '\\')
    if not full_path.exists():
        missing.append(f)

print(f'Total refs: {len(files)}')
print(f'Missing: {len(missing)}')
if missing:
    print('\nMissing files:')
    for m in missing[:15]:
        print(f'  {m}')
