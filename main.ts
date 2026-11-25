import { writeFileSync, mkdirSync } from "node:fs";

const line =
  "My Monday stand-up was an email, my inbox flooded, my deploy froze — so I blamed the intern. Turns out the intern is me.";

// Gate: 1–140 characters, not only whitespace.
if (line.length < 1 || line.length > 140 || line.trim().length === 0) {
  throw new Error(`entry length ${line.length} violates the 1–140 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
