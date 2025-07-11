import { readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const root = fileURLToPath(import.meta.resolve(`../`));

export const outputDirs = readdirSync(root)
  .filter((file) => file.startsWith("tsconfig.") && file !== "tsconfig.json")
  .map(
    (file) =>
      JSON.parse(readFileSync(join(root, file), "utf8")).compilerOptions.outDir
  )
  .map((dir) => resolve(root, dir));
