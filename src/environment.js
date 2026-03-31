let IS_PROD = true;
const server = IS_PROD
  ? "https://aapnavideocallbackend.onrender.com" // future use
  : "http://localhost:8080"; // local dev backend

export default server;
