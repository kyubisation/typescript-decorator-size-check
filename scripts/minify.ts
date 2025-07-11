import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { minify_sync } from "terser";
import { outputDirs } from "./common.ts";

outputDirs
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
