const dotenv = require('dotenv');

dotenv.config({ path: `.env` });

exports.PORT = process.env || { PORT: 3001 };
