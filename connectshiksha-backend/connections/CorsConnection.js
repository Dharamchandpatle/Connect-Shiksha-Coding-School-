const cors = require('cors');

const AllowedOrigins = [
  "http://localhost:3000",
  'https://connectshiksha.com'
]

const CorsConnection = cors({
  origin: (origin, callback) => {
    if (AllowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("not allowed by cors"));
    }
  },
  operationsSuccessStatus: 200,

});

module.exports = CorsConnection;