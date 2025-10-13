// systemInfo.js - System Information Module
// Created by: Saad Hassan Saad
// Academy of Digital Arts Egypt

const os = require("os");
const path = require("path");

function getSystemInfo() {
  return {
    platform: os.platform(),
    architecture: os.arch(),
    cpuCores: os.cpus().length,
    totalMemory: (os.totalmem() / 1024 ** 3).toFixed(2) + " GB",
    freeMemory: (os.freemem() / 1024 ** 3).toFixed(2) + " GB",
    hostname: os.hostname(),
    homeDirectory: os.homedir(),
    tempDirectory: os.tmpdir(),
    uptime: (os.uptime() / 3600).toFixed(2) + " hours",
  };
}

function getCurrentDirectory() {
  return process.cwd();
}

function getFileName(filePath) {
  return path.basename(filePath);
}

function getFileExtension(filePath) {
  return path.extname(filePath);
}

function joinPaths(...paths) {
  return path.join(...paths);
}

function getAbsolutePath(relativePath) {
  return path.resolve(relativePath);
}

function displaySystemInfo() {
  console.log("\n========== SYSTEM INFORMATION ==========");
  const info = getSystemInfo();
  console.log(`Platform: ${info.platform}`);
  console.log(`Architecture: ${info.architecture}`);
  console.log(`CPU Cores: ${info.cpuCores}`);
  console.log(`Total Memory: ${info.totalMemory}`);
  console.log(`Free Memory: ${info.freeMemory}`);
  console.log(`Hostname: ${info.hostname}`);
  console.log(`Home Directory: ${info.homeDirectory}`);
  console.log(`Temp Directory: ${info.tempDirectory}`);
  console.log(`System Uptime: ${info.uptime}`);
  console.log(`Current Directory: ${getCurrentDirectory()}`);
  console.log("========================================\n");
}

module.exports = {
  getSystemInfo,
  getCurrentDirectory,
  getFileName,
  getFileExtension,
  joinPaths,
  getAbsolutePath,
  displaySystemInfo,
};
