import { fileURLToPath } from "url";
import path from "path";

console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath); // /content/subfolder/test.txt

const base = path.basename(filePath); // test.txt
console.log(base);

const __filename = fileURLToPath(import.meta.url);
console.log(__filename); // ..../exercises-node-express/app.js
const __dirname = path.dirname(__filename);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute); // ..../exercises-node-express/content/subfolder/test.txt
