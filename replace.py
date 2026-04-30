import os

files_to_update = [
    'SPEC.md',
    'site.webmanifest',
    'README.md',
    'og-image.svg',
    'index.html',
    'favicon.svg',
    'CHANGELOG.md'
]

for filename in files_to_update:
    filepath = os.path.join(r'C:\Users\micha\.gemini\antigravity\scratch\vyzivne', filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace('vyzivne.cz', 'vyzivne.eu')
    content = content.replace('Vyzivne.cz', 'Vyzivne.eu')
    content = content.replace('VYZIVNE.CZ', 'VYZIVNE.EU')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Replacement complete.")
