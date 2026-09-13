const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

assert.ok(fs.existsSync("public/index.html"));
assert.ok(fs.existsSync("public/robots.txt"));
assert.ok(fs.existsSync("public/llms.txt"));

const source = fs
  .readFileSync("public/scripts/script.js", "utf8")
  .replace(/(?:renderHero|renderProfile)\(\);[\s\S]*$/, "");
const context = {};

vm.runInNewContext(`${source}\nglobalThis.partitionItems = partitionItems;`, context);

const [featured, archive] = context.partitionItems([
  { title: "Current", featured: true },
  { title: "Previous", featured: false },
]);

assert.deepEqual(featured.map((item) => item.title), ["Current"]);
assert.deepEqual(archive.map((item) => item.title), ["Previous"]);
