
require('dotenv').config()

const PORT = process.env.PORT
const MONGODB_URI = process.env.NODE_ENV === 'test'
    ? process.env.TESTDB_URL
    : process.env.MONGODB_URL

module.exports = {
    MONGODB_URI,
    PORT
}