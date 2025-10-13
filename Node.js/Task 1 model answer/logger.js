// logger.js - Logger Module
// Created by: Saad Hassan Saad
// Academy of Digital Arts Egypt

function log(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] LOG: ${message}`);
}

function info(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] INFO: ${message}`);
}

function warn(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] WARN: ${message}`);
}

function error(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ERROR: ${message}`);
}

function success(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] SUCCESS: ${message}`);
}

module.exports = {
  log,
  info,
  warn,
  error,
  success,
};
