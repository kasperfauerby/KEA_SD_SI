const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('champions.db', (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  }

  console.log('Connected to the champions database.');

  db.run(`CREATE TABLE IF NOT EXISTS champions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    difficulty INTEGER NOT NULL
  )`, (err) => {
    if (err) {
      console.error(err.message);
      throw err;
    }

    console.log('Champions table created.');
  });
});
