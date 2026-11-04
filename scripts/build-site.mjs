import { cp, lstat, mkdir, realpath, rm } from "node:fs/promises";
import { join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = await realpath(fileURLToPath(new URL("../", import.meta.url)));
const outputDirectory = resolve(projectRoot, "dist");
const publicEntries = ["index.html", "pages", "styles", "assets"];

// La limpieza se limita a la carpeta dist de este proyecto.
if (relative(projectRoot, outputDirectory) !== "dist") {
  throw new Error("La carpeta de publicación debe ser dist dentro del proyecto.");
}

try {
  const outputInfo = await lstat(outputDirectory);
  if (outputInfo.isSymbolicLink() || !outputInfo.isDirectory()) {
    throw new Error("dist debe ser una carpeta local, no un enlace ni un archivo.");
  }
  if (await realpath(outputDirectory) !== outputDirectory) {
    throw new Error("La ruta real de dist está fuera de la carpeta esperada.");
  }
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory);

for (const entry of publicEntries) {
  await cp(join(projectRoot, entry), join(outputDirectory, entry), { recursive: true });
}

console.log("Sitio preparado en dist/ con HTML, CSS y recursos públicos.");
