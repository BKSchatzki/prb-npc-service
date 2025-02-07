const logger = {
  info: (msg) => {
    console.log(`[INFO] ${new Date().toISOString()}: ${msg}`);
  },
  error: (msg) => {
    console.log(`[ERROR] ${new Date().toISOString()}: ${msg}`);
  },
  debug: (msg) => {
    console.log(`[DEBUG] ${new Date().toISOString()}: ${msg}`);
  },
};

export default logger;
