const express = require('express');
const app = express();
const port = 3000;

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Static files
app.use('/static', express.static('src/static'));

// Start server
app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});

module.exports = app; // Export for testing
