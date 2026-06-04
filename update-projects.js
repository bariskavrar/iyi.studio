import fs from 'fs';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'public', 'images');
const manifestPath = path.join(imagesDir, 'projects.json');

try {
  const folders = fs.readdirSync(imagesDir).filter(file => {
    const fullPath = path.join(imagesDir, file);
    return fs.statSync(fullPath).isDirectory();
  });

  // Sort folders if needed (optional)
  folders.sort();

  fs.writeFileSync(manifestPath, JSON.stringify(folders, null, 2));
  console.log(`Successfully updated ${manifestPath} with ${folders.length} projects.`);
} catch (error) {
  console.error("Error updating projects manifest:", error);
}
