const logger = {
  info: (msg: string) => {
    console.log(`[INFO] ${new Date().toISOString()}: ${msg}`);
  },
  error: (msg: string) => {
    console.log(`[ERROR] ${new Date().toISOString()}: ${msg}`);
  },
  debug: (msg: string) => {
    console.log(`[DEBUG] ${new Date().toISOString()}: ${msg}`);
  },
};

export default logger;
