import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";
import { fileURLToPath } from "node:url";
import * as pkg from "./package-lock.json" with { type: "json" };

const sizes = readdirSync(import.meta.dirname)
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
      .filter((file) => file.endsWith(".js"))
      .map((file) => ({
        type: `${basename(dir)}/${file}`,
        size: readFileSync(join(dir, file), "utf8").length,
        diff: 0,
      }))
  );

for (const size of sizes) {
  const comparisonName = size.type.includes("experimental")
    ? size.type.replaceAll("experimental", "standard")
    : size.type.replaceAll("standard", "experimental");
  const comparison = sizes.find((s) => s.type === comparisonName)!;
  size.diff = size.size - comparison.size;
}

console.table(
  sizes.reduce(
    (current, { type, ...data }) => Object.assign(current, { [type]: data }),
    {} as Record<string, Omit<typeof sizes, "type">>
  )
);

const readmePath = fileURLToPath(import.meta.resolve("./README.md"));
const insertMarker = "## Results";
const readme = readFileSync(readmePath, "utf8").split(insertMarker)[0];
const packages = 'default' in pkg ? (pkg.default as typeof pkg).packages : pkg.packages;

writeFileSync(
  readmePath,
  `${readme}${insertMarker}

Run \`npm run calculate\` to transpile the examples and calculate the resulting sizes.

TypeScript: ${packages["node_modules/typescript"].version}
Terser (.min.js): ${packages["node_modules/terser"].version}

| Type | Size | Diff |
| ---- | ---- | ---- |
${sizes
    .map(
      ({ type, size, diff }) =>
        `| ${type} | ${size.toLocaleString()} | ${diff} |`).join("\n")}
`,
  "utf8"
);
