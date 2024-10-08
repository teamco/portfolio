/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config();

/**
 * API definition
 * @type {{
 *  SERVER_URL,
 *  ADMIN_URL,
 *  ADMIN_NS,
 *  UI_URL,
 *  SERVER_PORT,
 *  ADMIN_PORT,
 *  PORT,
 *  API_NS
 * }}
 */
const {
  SERVER_URL = 'http://localhost:8003',
  ADMIN_URL = 'http://localhost',
  UI_URL = 'http://localhost',
  SERVER_PORT = 25000,
  ADMIN_PORT = 8001,
  PORT = 8003,
  ADMIN_NS = 'admin',
  API_NS = '/api/v1'
} = process.env;

/**
 * @export
 * @return {{
 *  SERVER_URL,
 *  ADMIN_URL,
 *  ADMIN_NS,
 *  UI_URL,
 *  SERVER_PORT,
 *  ADMIN_PORT,
 *  PORT,
 *  METHODS,
 *  API_NS
 * }}
 * @constant
 */
const RUNTIME_CONFIG = {
    SERVER_URL,
    ADMIN_URL,
    ADMIN_NS,
    UI_URL,
    SERVER_PORT,
    ADMIN_PORT,
    PORT,
    API_NS
};

module.exports = { RUNTIME_CONFIG };