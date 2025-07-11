import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { minify_sync } from "terser";

readdirSync(import.meta.dirname)
  .filter((file) => file.startsWith("tsconfig.") && file !== "tsconfig.json")
  .map(
    (file) =>
      JSON.parse(
        readFileSync(fileURLToPath(import.meta.resolve(`./${file}`)), "utf8")
      ).compilerOptions.outDir
  )
  .map((dir) => fileURLToPath(import.meta.resolve(dir)))
  .flatMap((dir) =>
    readdirSync(dir)
      .filter((file) => file.endsWith(".js") && !file.endsWith(".min.js"))
      .map((file) => join(dir, file))
  )
  .forEach((file) => {
    const result = minify_sync(readFileSync(file, "utf8"));
    return writeFileSync(
      file.replace(/\.js$/, ".min.js"),
      result.code!,
      "utf8"
    );
  });
