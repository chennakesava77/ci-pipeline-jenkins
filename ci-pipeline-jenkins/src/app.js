const express = require('express');
const app = express();

// Root route
app.get('/', (req, res) => {
  res.status(200).send('Hello, Jenkins CI!');
});

// Export app (no app.listen here — Jest will handle this in tests)
module.exports = app;
