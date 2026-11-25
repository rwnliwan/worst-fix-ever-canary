import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "fix: canary died, shipped anyway";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
