/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverBuildTarget: "vercel",
  server: "./server.js",
  serverBuildPath: "api/index.js",
};