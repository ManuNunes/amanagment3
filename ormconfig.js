module.exports = {

  "type": "postgres",
  "url": process.env.DB_URL,
  "synchronize": false,
  "ssl": {
    "rejectUnauthorized": false
  },
  "entities": [
    "./src/database/models/**.ts"
  ],
  "migrations": [
    "./src/database/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations/"
  }
}