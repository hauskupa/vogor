#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pkgPath = path.join(__dirname, "package.json");

// Read package.json
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
const version = pkg.version || "1.0.0";
const [major, minor, patch] = version.split(".").map(Number);
const newVersion = `${major}.${minor}.${patch + 1}`;

// Update version
pkg.version = newVersion;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf8");

// Create and push tag
const tag = `v${newVersion}`;
execSync(`git tag ${tag}`, { cwd: __dirname, stdio: "inherit" });
execSync(`git push origin ${tag}`, { cwd: __dirname, stdio: "inherit" });

console.log(`Release ${newVersion} created!`);

