"""批量处理：超大PNG转JPG + 所有图统一缩到1920px宽"""
import os, sys
from PIL import Image
from pathlib import Path

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

IMG_DIR = Path(r"C:\Users\Administrator\.qclaw\workspace\portfolio\images")
MAX_W = 1920          # 统一最大宽度
JPG_QUALITY = 80      # JPG 压缩质量

total = 0
converted = 0
resized = 0
skipped = 0

# JS 文件路径（需要同步更新）
JS_FILE = Path(r"C:\Users\Administrator\.qclaw\workspace\portfolio\js\main.js")

# 记录哪些文件被转了格式
renamed = {}  # old_path_str -> new_path_str

def process_file(fpath):
    global total, converted, resized, skipped
    ext = fpath.suffix.lower()
    if ext not in ('.png', '.jpg', '.jpeg'):
        return
    total += 1

    size_kb = fpath.stat().st_size / 1024

    try:
        img = Image.open(fpath)
        w, h = img.size
    except Exception as e:
        print(f"[ERR open] {fpath.name}: {e}")
        return

    # 判断是否需要处理
    need_resize = w > MAX_W
    # PNG 且尺寸>1200px宽 或者 文件>5MB → 转JPG
    need_convert = (ext == '.png' and (w > 1200 or size_kb > 5000))

    if not need_resize and not need_convert:
        if size_kb < 2000:
            print(f"  skip: {fpath.name} ({size_kb:.0f}KB {w}x{h})")
            skipped += 1
            return
        else:
            # 大文件但尺寸不大 → 只转JPG
            need_convert = True

    # 计算新尺寸
    if need_resize:
        ratio = MAX_W / w
        new_w, new_h = MAX_W, int(h * ratio)
    else:
        new_w, new_h = w, h

    img = img.resize((new_w, new_h), Image.LANCZOS)

    # 保存
    if ext == '.png' and need_convert:
        # 转 JPG
        new_path = fpath.with_suffix('.jpg')
        buf = __import__('io').BytesIO()
        img.convert('RGB').save(buf, 'JPEG', quality=JPG_QUALITY, optimize=True)
        jpg_kb = len(buf.getvalue()) / 1024
        with open(new_path, 'wb') as f:
            f.write(buf.getvalue())
        fpath.unlink()  # 删除原PNG
        renamed[str(fpath)] = str(new_path)
        saved = size_kb - jpg_kb
        pct = saved / size_kb * 100
        print(f"  [CONV->JPG] {fpath.name} ({size_kb:.0f}KB {w}x{h}) -> {new_path.name} ({jpg_kb:.0f}KB {new_w}x{new_h}) save={pct:.0f}%")
        converted += 1
    else:
        # 直接覆盖（已缩放或优化）
        buf = __import__('io').BytesIO()
        if ext in ('.jpg', '.jpeg'):
            img.save(buf, 'JPEG', quality=JPG_QUALITY, optimize=True)
        else:
            img.save(buf, 'PNG', optimize=True)
        with open(fpath, 'wb') as f:
            f.write(buf.getvalue())
        new_kb = len(buf.getvalue()) / 1024
        saved = size_kb - new_kb
        pct = saved / size_kb * 100 if size_kb > 0 else 0
        print(f"  [OK] {fpath.name}: {size_kb:.0f}KB -> {new_kb:.0f}KB save={pct:.0f}% {w}x{h} -> {new_w}x{new_h}")
        resized += 1

print("=== 开始处理 ===")
for root, dirs, files in os.walk(IMG_DIR):
    for fname in files:
        fpath = Path(root) / fname
        process_file(fpath)

# 更新 JS 文件中的图片路径
if renamed:
    print(f"\n=== 更新 JS 文件中的路径 ===")
    js_content = JS_FILE.read_text(encoding='utf-8')
    changes = 0
    for old, new in renamed.items():
        old_alt = old.replace('\\', '/')
        new_alt = new.replace('\\', '/')
        old_name = Path(old).name
        new_name = Path(new).name
        # 替换文件名（保持相对路径前缀）
        if old_name in js_content:
            js_content = js_content.replace(old_name, new_name)
            changes += 1
            print(f"  JS更新: {old_name} -> {new_name}")
    JS_FILE.write_text(js_content, encoding='utf-8')
    print(f"  JS更新完成 ({changes} 处)")

print(f"\n完成: 总计{total}个, 转换JPG:{converted}个, 压缩:{resized}个, 跳过:{skipped}个")
