// Ping the site every 5 minutes (300000 ms) to prevent Dyno from idling
const http = require("http");

export default function (req, res, next) {
  setInterval(() => {
    http.get({
      hostname: 'tannersmarshall.com',
      path: '/',
    });
  }, 300000);

  next();
}
