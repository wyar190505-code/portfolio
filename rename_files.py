# -*- coding: utf-8 -*-
import os
import re

IMAGES_DIR = r"C:\Users\Administrator\.qclaw\workspace\portfolio\images"

def is_chinese(text):
    return bool(re.search(r'[\u4e00-\u9fff]', text))

def rename_files():
    count = 0
    for root, dirs, files in os.walk(IMAGES_DIR):
        for f in files:
            if is_chinese(f):
                old_path = os.path.join(root, f)
                ext = os.path.splitext(f)[1]
                
                # 获取父文件夹名作为前缀
                parent = os.path.basename(root)
                
                # 获取同目录下已重命名的文件数量
                existing = [x for x in os.listdir(root) if x.startswith(parent) and not is_chinese(x)]
                idx = len(existing) + 1
                
                new_name = f"{parent}-{idx:02d}{ext}"
                new_path = os.path.join(root, new_name)
                
                # 避免重名
                c = 1
                while os.path.exists(new_path):
                    new_name = f"{parent}-{idx:02d}-{c}{ext}"
                    new_path = os.path.join(root, new_name)
                    c += 1
                
                try:
                    os.rename(old_path, new_path)
                    print(f"OK: {f} -> {new_name}")
                    count += 1
                except Exception as e:
                    print(f"ERROR: {f}: {e}")
    
    print(f"\n完成！共重命名 {count} 个文件")

if __name__ == "__main__":
    rename_files()
