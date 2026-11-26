// One-Star Review of Something Essential
// Writes a single deadpan one-star review of sleep to /output/entry.txt.
// Node standard library only.

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const review =
  "One star. Sleep abandons me at 3 a.m. for no stated reason, then reports for duty in the middle of my performance review.";

const outPath = "/output/entry.txt";

try {
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, review, "utf8");
} catch {
  // Fallback for local runs where /output is not writable.
  writeFileSync("entry.txt", review, "utf8");
}
