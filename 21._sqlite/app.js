const sqlite3 = require('sqlite3').verbose();
const _ = require('lodash');

const db = new sqlite3.Database('champions.db');

// Read all champions from the database
function readChampions() {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM champions', (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

// Insert a new champion into the database
function insertChampion(name, role, difficulty) {
  return new Promise((resolve, reject) => {
    db.run('INSERT INTO champions (name, role, difficulty) VALUES (?, ?, ?)', [name, role, difficulty], function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(this.lastID);
      }
    });
  });
}

// Update a champion's difficulty
function updateChampionDifficulty(championId, newDifficulty) {
  return new Promise((resolve, reject) => {
    db.run('UPDATE champions SET difficulty = ? WHERE id = ?', [newDifficulty, championId], function (err) {
      if (err) {
        reject(err);
      } else if (this.changes === 0) {
        reject(new Error('Champion not found.'));
      } else {
        resolve();
      }
    });
  });
}

// Delete a champion from the database
function deleteChampion(championId) {
  return new Promise((resolve, reject) => {
    db.run('DELETE FROM champions WHERE id = ?', [championId], function (err) {
      if (err) {
        reject(err);
      } else if (this.changes === 0) {
        reject(new Error('Champion not found.'));
      } else {
        resolve();
      }
    });
  });
}

// Example usage of the functions
async function main() {
  try {
    // Insert champions into the database
    const champion1Id = await insertChampion('Champion 1', 'Top', 2);
    const champion2Id = await insertChampion('Champion 2', 'Mid', 3);
    console.log(`Inserted champions with IDs: ${champion1Id}, ${champion2Id}`);

    // Read all champions
    const champions = await readChampions();
    console.log('All champions:');
    console.log(champions);

    // Update a champion's difficulty
    await updateChampionDifficulty(champion1Id, 4);
    console.log('Updated champion difficulty.');

    // Delete a champion
    await deleteChampion(champion2Id);
    console.log('Deleted champion.');

    // Read all champions after modifications
    const updatedChampions = await readChampions();
    console.log('Champions after modifications:');
    console.log(updatedChampions);
  } catch (err) {
    console.error(err);
  } finally {
    db.close();
  }
}

main();
