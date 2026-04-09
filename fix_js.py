import re

with open(r'C:\Users\Administrator\.qclaw\workspace\portfolio\js\main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 查找并修复问题：红包'.jpg 中的引号导致JS语法错误
# 把 '红包'.jpg' 改成 '红包\'.jpg'
old_pattern = "红包'.jpg"
new_pattern = "红包'.jpg"

if old_pattern in content:
    print(f'Found: {old_pattern}')
    content = content.replace(old_pattern, new_pattern)
    with open(r'C:\Users\Administrator\.qclaw\workspace\portfolio\js\main.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print('Fixed!')
else:
    print('Pattern not found')
    # 尝试查找附近的内容
    if 'taotian-pack' in content:
        print('Found taotian-pack')
