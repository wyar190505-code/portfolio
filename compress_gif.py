"""GIF动图压缩：缩小尺寸 + 抽帧"""
import os
from PIL import Image

GIF_PATH = r"C:\Users\Administrator\.qclaw\workspace\portfolio\images\包装效果图\北大\20250807北大中秋-马口铁盒动图-WJY.gif"
MAX_W = 600           # 最大宽度
MAX_FRAMES = 12       # 最多保留帧数
ORIG_KB = os.path.getsize(GIF_PATH) / 1024

img = Image.open(GIF_PATH)
print(f"原始: {img.size[0]}x{img.size[1]}, {ORIG_KB:.0f}KB")

# 提取所有帧
frames = []
try:
    i = 0
    while True:
        frames.append(img.copy().convert('RGBA'))
        i += 1
        img.seek(i)
except EOFError:
    pass

total_frames = len(frames)
print(f"总帧数: {total_frames}")

# 抽帧：均匀采样
step = max(1, total_frames // MAX_FRAMES)
selected = [frames[i] for i in range(0, total_frames, step)]
selected = selected[:MAX_FRAMES]
print(f"保留帧数: {len(selected)} (每{step}帧取1帧)")

# 缩放
ratio = MAX_W / selected[0].width
new_w = int(selected[0].width * ratio)
new_h = int(selected[0].height * ratio)
print(f"新尺寸: {new_w}x{new_h}")

resized = [f.resize((new_w, new_h), Image.LANCZOS) for f in selected]

# 转换回调色板模式（GIF必须用调色板）
converted = []
for f in resized:
    f = f.convert('P', palette=Image.ADAPTIVE, colors=128)
    converted.append(f)

# 保存
out_path = GIF_PATH
converted[0].save(
    out_path,
    save_all=True,
    append_images=converted[1:],
    duration=[img.info.get('duration', 100)] * len(converted),
    loop=0,
    optimize=True
)

NEW_KB = os.path.getsize(GIF_PATH) / 1024
print(f"\n完成: {ORIG_KB:.0f}KB -> {NEW_KB:.0f}KB (节省 {100*(ORIG_KB-NEW_KB)/ORIG_KB:.0f}%)")
