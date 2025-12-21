const IS_PROD = process.env.NODE_ENV === "production";

const server = IS_PROD
  ? "https://your-production-backend.com" // future use
  : "http://localhost:8080"; // local dev backend

export default server;
