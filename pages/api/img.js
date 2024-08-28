// pages/api/img.js
import fs from "fs/promises";
import path from "path";

export default async function handler(req, res) {
  try {
    // 读取图片 URL 列表
    const filePath = path.join(process.cwd(), "data", "imageUrls.json");
    const fileContent = await fs.readFile(filePath, "utf8");
    const imageUrls = JSON.parse(fileContent);

    // 选择一个随机图片 URL
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];

    // 发送响应
    //res.status(200).json({ imageUrl: randomImageUrl });

    // 注意：下面的代码行已被注释掉，因为它会改变API的行为，从返回JSON变为重定向到图片URL
    res.redirect(randomImageUrl);
  } catch (error) {
    // 处理错误
    console.error("Error fetching random image URL:", error);
    res.status(500).json({ error: "Failed to fetch random image URL" });
  }
}
