const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, NG with CI workflow, now with CD!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
