const IS_PROD = process.env.NODE_ENV === "production";

const server = IS_PROD
  ? "https://aapnavideocllbackend.onrender.com" // future use
  : "http://localhost:8080"; // local dev backend

export default server;
