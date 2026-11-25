import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outputDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const entry = "The office coffee machine hears more of my problems than my therapist, and it never once said let's circle back to that.";

// Gate: a single line of 1-200 characters, not only whitespace.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0 || entry.includes("\n")) {
  throw new Error("Entry fails the 1-200 character single-line gate");
}

mkdirSync(outputDir, { recursive: true });
const entryPath = join(outputDir, "entry.txt");
writeFileSync(entryPath, entry + "\n", "utf8");
chmodSync(entryPath, 0o644);
