// Ping the site every 15 minutes (900000 ms) to prevent Dyno from idling (idles at 30 min)
const http = require("http");

export default function (req, res, next) {
  setInterval(() => {
    http.get({
      hostname: 'tannersmarshall.com',
      path: '/',
    });
  }, 900000);

  next();
}
