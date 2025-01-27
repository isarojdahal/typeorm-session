class EnvConfig {
  // Database
  static DB_NAME = process.env.DB_NAME;
  static DB_USERNAME = process.env.DB_USERNAME;
  static DB_PASSWORD = process.env.DB_PASSWORD;
  static DB_PORT = +process.env.DB_PORT! || 5432;
  static DB_HOST = process.env.DB_HOST;
}

export { EnvConfig };

// object
