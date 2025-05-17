const express = require('express');
const cors = require('cors');
const db = require('./backend/db');

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());

app.post('/api/gift', (req, res) => {
  const { name, giftType, phoneNumber, accountNumber, bankName } = req.body;

  const sql = `
    INSERT INTO gifts (name, giftType, phoneNumber, accountNumber, bankName)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.run(sql, [name, giftType, phoneNumber || null, accountNumber || null, bankName || null], function (err) {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err.message });
    }
    res.json({ message: 'Gift saved!', id: this.lastID });
  });
});




app.get('/api/gift', (req, res) => {
    const sql = 'SELECT * FROM gifts ORDER BY id DESC';
  
    db.all(sql, [], (err, rows) => {
      if (err) {
        return res.status(500).json({ message: 'Database error', error: err.message });
      }
      res.json(rows);
    });
});




app.listen(PORT, () => {
  console.log('Server running on:' + PORT);
});
