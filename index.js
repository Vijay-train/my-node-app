const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, new 3 World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
