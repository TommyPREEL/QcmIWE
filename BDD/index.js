const express = require('express');
const sqlite3 = require('sqlite3');

const app = express();
const port = 4000;
const cors = require('cors');
// Créez une base de données SQLite et une table simple

app.use(cors());
const db = new sqlite3.Database('./db/mabdd.db');

// db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)');

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Endpoint pour récupérer tous les utilisateurs
// app.get('/users', (req, res) => {
//   db.all('SELECT * FROM users', (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//     res.json({ users: rows });
//   });
// });

// Endpoint pour ajouter un utilisateur
// app.post('/users', (req, res) => {
//   const { name } = req.body;
//   if (!name) {
//     res.status(400).json({ error: 'Le nom de l\'utilisateur est requis' });
//     return;
//   }

//   db.run('INSERT INTO users (name) VALUES (?)', [name], function (err) {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }

//     res.json({ userId: this.lastID });
//   });
// });

function getRandomInt(module) {
    let min = 0;
    let max = 0;
    switch(module){
        case 1: { 
            min = Math.ceil(1001);
            max = Math.floor(1475);
            break;
        }
        case 2: { 
            min = Math.ceil(min);
            max = Math.floor(max);
            break;
        }
        case 3: { 
            min = Math.ceil(min);
            max = Math.floor(max);
            break;
        }
        case 4: { 
            min = Math.ceil(min);
            max = Math.floor(max);
            break;
        }
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
app.get('/question', (req, res) => {
    let module = req.query.module;
    let id = getRandomInt(Number(module)); 
    db.all(`SELECT * FROM bdd where id = ? AND Module = ?`, [id, module], (err, rows) => {
    if (err) {
        res.status(500).json({ error: err.message });
    }
    res.json(rows);
    console.log(rows);
    });
});

app.get('/', (req, res) => {
    let id = getRandomInt(1001, 1475); 
    res.json({id: id});
});

// Lancez le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});