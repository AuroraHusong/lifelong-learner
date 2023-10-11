// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql', // The database client you're using (e.g., 'postgresql', 'mysql', 'sqlite3', etc.)
    connection: {
      host: 'bubble.db.elephantsql.com',
      database: 'toxlpykm',
      user: 'toxlpykm',
      password: 'DHYuAMbg90jI-14GLtVu6mp_TL0k-BA3',
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
    },
  }
