#!/usr/bin/env node

/**
 * release.js
 * 
 * Auto-bumps version in package.json and creates a GitHub release tag.
 * Called after `npm run build && git push` completes.
 * 
 * Usage: node release.js [major|minor|patch]
 * Default: patch (e.g., 1.0.0 -> 1.0.1)
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pkgPath = path.join(__dirname, "package.json");

// Read package.json
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
let version = pkg.version || "1.0.0";

// Parse bumpType from command line (default: patch)
const bumpType = process.argv[2] || "patch";

// Bump version
const [major, minor, patch] = version.split(".").map(Number);
let newVersion;

switch (bumpType) {
  case "major":
    newVersion = `${major + 1}.0.0`;
    break;
  case "minor":
    newVersion = `${major}.${minor + 1}.0`;
    break;
  case "patch":
  default:
    newVersion = `${major}.${minor}.${patch + 1}`;
}

console.log(`Bumping version: ${version} -> ${newVersion}`);

// Update package.json
pkg.version = newVersion;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf8");

try {
  // Create git tag
  const tag = `v${newVersion}`;
  console.log(`Creating git tag: ${tag}`);
  execSync(`git tag ${tag}`, { stdio: "inherit" });

  // Push tag to GitHub (creates release)
  console.log(`Pushing tag to GitHub...`);
  execSync(`git push origin ${tag}`, { stdio: "inherit" });

  console.log(`✓ Release ${newVersion} created successfully!`);
  console.log(`\nUpdate Webflow to use:`);
  console.log(`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hauskupa/vogor@latest/dist/styles.css">`);
  console.log(`<script src="https://cdn.jsdelivr.net/gh/hauskupa/vogor@latest/dist/main.js" defer></script>`);
} catch (error) {
  console.error("Error creating release:", error.message);
  process.exit(1);
}
