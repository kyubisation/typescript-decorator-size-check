import { rmSync } from "node:fs";
import { outputDirs } from "./common.ts";

outputDirs.forEach((dir) => rmSync(dir, { recursive: true, force: true }));
