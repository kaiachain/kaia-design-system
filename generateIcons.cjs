// Run with: node generateIcons.cjs to generate the index.ts file in the icons directory

const fs = require("fs");
const path = require("path");

const iconsDir = path.join(__dirname, "src", "icons");
const outputFile = path.join(iconsDir, "index.ts");

function getAllSvgFiles(dir, fileList = [], relativePath = "") {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const fileStat = fs.statSync(filePath);
    const fileRelativePath = path.join(relativePath, file);

    if (fileStat.isDirectory()) {
      if (relativePath.split(path.sep).length < 2) {
        getAllSvgFiles(filePath, fileList, fileRelativePath);
      }
    } else if (path.extname(file) === ".svg") {
      fileList.push(fileRelativePath);
    }
  });

  return fileList;
}

const svgFiles = getAllSvgFiles(iconsDir);

let importStatements = "";
let exportStatements = "export default {\n";

svgFiles.forEach((file) => {
  const iconNameParts = file
    .split(path.sep)
    .map(
      (part) => part.charAt(0).toUpperCase() + part.slice(1).replace(".svg", "")
    );
  const iconName = iconNameParts.join("");
  importStatements += `import ${iconName} from './${file.replace(
    /\\/g,
    "/"
  )}';\n`;
  exportStatements += `  ${iconName},\n`;
});

exportStatements += "};\n";

fs.writeFileSync(outputFile, importStatements + "\n" + exportStatements);

console.log(`Generated ${outputFile}`);
