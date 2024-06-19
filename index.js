const Knex = require('knex')
const { setTimeout } = require('timers/promises')
const Client_SQLite3 = require('knex/lib/dialects/sqlite3')

class Client_Libsql extends Client_SQLite3 {
  _driver() {
    return require("@libsql/sqlite3");
  }
}

const tursoURL = '<ENTER-URL-HERE>'

const knex = Knex({
  client: Client_Libsql,
  connection: {
    filename: tursoURL,
  },
});

async function run() {
  const result = await knex.raw('SELECT 1 + 1')
  console.log(result)
}

run().then(() => setTimeout(30000)).then(() => run())
