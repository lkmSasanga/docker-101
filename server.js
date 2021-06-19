const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
        <h2>Docker Beginner Guide!!!</h2>
        </section>
      </body>
    </html>
  `);
});

app.listen(80);