import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "./src/assets";
const outputDir = "./src/assets/optimized";
const dataFile = "./src/api/data.js";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const files = fs.readdirSync(inputDir);

let updatedData = fs.readFileSync(dataFile, "utf-8");

(async () => {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);

    if (!file.match(/\.(jpg|jpeg|png)$/)) continue;

    const newName = file.split(".")[0] + ".webp";
    const outputPath = path.join(outputDir, newName);

    await sharp(inputPath)
      .resize(800) // resize (optional)
      .webp({ quality: 70 })
      .toFile(outputPath);

    console.log(`Optimized: ${file}`);

    // Replace path in data.js
    updatedData = updatedData.replace(
      new RegExp(file, "g"),
      newName
    );
  }

  fs.writeFileSync(dataFile, updatedData);
  console.log("✅ data.js updated automatically!");
})();