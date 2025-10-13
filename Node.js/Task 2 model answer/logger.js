// logger.js - Logger Module with ES6+ Features
// Created by: Saad Hassan Saad
// Academy of Digital Arts Egypt

export const log = (message) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] LOG: ${message}`);
};

export const info = (message) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] INFO: ${message}`);
};

export const success = (message) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] SUCCESS: ${message}`);
};

export const error = (message) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ERROR: ${message}`);
};

export const warn = (message) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] WARN: ${message}`);
};
