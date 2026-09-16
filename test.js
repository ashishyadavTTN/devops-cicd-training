const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");

const checks = [
  { name: "has <title> tag", pass: html.includes("<title>") },
  { name: "has version text", pass: html.includes("Version:") },
  { name: "links style.css", pass: html.includes("style.css") },
];

let failed = false;
for (const check of checks) {
  console.log(`${check.pass ? "PASS" : "FAIL"} - ${check.name}`);
  if (!check.pass) failed = true;
}

if (failed) {
  process.exit(1);
}

console.log("All tests passed.");
