// Ping the site every 5 minutes (300000 ms) to prevent Dyno from idling
const http = require("http");

export default function () {
  setInterval(() => {
      http.get("tannersmarshall.com");
  }, 300000);
}
