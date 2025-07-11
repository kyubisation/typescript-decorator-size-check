import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";
import * as pkg from "../package-lock.json" with { type: "json" };
import { outputDirs, root } from "./common.ts";

const sizes = outputDirs
  .flatMap((dir) =>
    readdirSync(dir)
      .filter((file) => file.endsWith(".js") && !file.endsWith(".min.js"))
      .map((file) => ({
        type: `${basename(dir)}/${file}`,
        size: readFileSync(join(dir, file), "utf8").length,
        diff: 0,
        minifiedSize: readFileSync(join(dir, file.replace(/.js$/, '.min.js')), "utf8").length,
        minifiedDiff: 0,
      }))
  );

for (const size of sizes) {
  const comparisonName = size.type.includes("experimental")
    ? size.type.replaceAll("experimental", "standard")
    : size.type.replaceAll("standard", "experimental");
  const comparison = sizes.find((s) => s.type === comparisonName)!;
  size.diff = size.size - comparison.size;
  size.minifiedDiff = size.minifiedSize - comparison.minifiedSize;
}

console.table(
  sizes.reduce(
    (current, { type, ...data }) => Object.assign(current, { [type]: data }),
    {} as Record<string, Omit<typeof sizes, "type">>
  )
);

const readmePath = join(root, "README.md");
const insertMarker = "## Results";
const readme = readFileSync(readmePath, "utf8").split(insertMarker)[0];
const packages = 'default' in pkg ? (pkg.default as typeof pkg).packages : pkg.packages;

writeFileSync(
  readmePath,
  `${readme}${insertMarker}

Run \`npm run calculate\` to transpile the examples and calculate the resulting sizes.

TypeScript: ${packages["node_modules/typescript"].version}

Terser (.min.js): ${packages["node_modules/terser"].version}

| Type | Size | Diff | Minified Size | Minified Diff |
| ---- | ---- | ---- | ---- | ------------- |
${sizes
    .map(
      ({ type, size, diff, minifiedSize, minifiedDiff }) =>
        `| ${type} | ${size} | ${diff} | ${minifiedSize} | ${minifiedDiff} |`).join("\n")}
`,
  "utf8"
);
