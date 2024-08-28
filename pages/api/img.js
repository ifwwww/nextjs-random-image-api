// pages/api/img.js
import fs from "fs/promises";
import path from "path";

export default async function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "data", "imgurl.json");
    const fileContent = await fs.readFile(filePath, "utf8");
    const imageUrls = JSON.parse(fileContent);

    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];

    //res.status(200).json({ imageUrl: randomImageUrl });
    res.redirect(randomImageUrl);
  } catch (error) {
    console.error("Error fetching random image URL:", error);
    res.status(500).json({ error: "Failed to fetch random image URL" });
  }
}
