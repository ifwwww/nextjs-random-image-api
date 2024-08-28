const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

// 读取图片URL列表，并移除所有的\r字符
const imageUrls = fs
  .readFileSync("link.txt", "utf8")
  .replace(/\r/g, "") // 移除所有的\r字符
  .split("\n")
  .filter((url) => url.trim() !== ""); // 移除空行和可能的仅包含空白字符的行

// ...（其余代码保持不变）

app.get("/", (req, res) => {
  // 从列表中随机选择一个URL
  const randomImageUrl =
    imageUrls[Math.floor(Math.random() * imageUrls.length)];

  // 发送图片URL作为响应
  //res.json({ imageUrl: randomImageUrl });

  // 或者，如果你想直接发送图片，可以这样做（注意这通常不适用于JSON API）
  res.redirect(randomImageUrl); // 这会重定向到图片URL，不是发送JSON
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
