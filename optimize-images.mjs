import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Define directories relative to project root
const inputDir = path.join(process.cwd(), 'public', 'images');
const tempDir = path.join(process.cwd(), 'public', 'images-optimized');

async function processImages() {
  // 1. Create a temporary folder for output
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  const files = fs.readdirSync(inputDir);
  console.log(`🚀 Found ${files.length} files in public/images. Starting optimization...\n`);

  let count = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    
    // Only target image formats
    if (['.webp', '.jpg', '.jpeg', '.png'].includes(ext)) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(tempDir, file);

      try {
        const statsBefore = fs.statSync(inputPath);
        
        // Process image: limit width to 1920px max, set WebP/JPG compression
        let pipeline = sharp(inputPath).resize({
          width: 1920,
          fit: 'inside',
          withoutEnlargement: true,
        });

        if (ext === '.webp') {
          pipeline = pipeline.webp({ quality: 80, effort: 6 });
        } else if (ext === '.jpg' || ext === '.jpeg') {
          pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
        } else if (ext === '.png') {
          pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
        }

        await pipeline.toFile(outputPath);

        const statsAfter = fs.statSync(outputPath);
        const beforeSize = (statsBefore.size / 1024 / 1024).toFixed(2);
        const afterSize = (statsAfter.size / 1024 / 1024).toFixed(2);

        console.log(`✅ [${++count}] ${file}: ${beforeSize} MB ➔ ${afterSize} MB`);
      } catch (err) {
        console.error(`❌ Error processing ${file}:`, err.message);
      }
    }
  }

  console.log('\n✨ All images processed successfully in public/images-optimized!');
  console.log('👉 Verify the quality in public/images-optimized, then replace your public/images files with them.');
}

processImages();