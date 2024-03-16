// server.js

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/save-to-file', (req, res) => {
  const data = req.body.data;
  const fileName = req.query.fileName || 'cont.js'; // Default to cont.js if fileName is not provided
  fs.writeFileSync(fileName, `const regex = ${JSON.stringify(data)};`);
  res.send('Data written to file successfully!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
