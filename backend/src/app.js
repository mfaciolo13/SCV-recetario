const express = require('express');
const { recetasRouter } = require('./recetas/routes/recetas.router.js');

const app = express();

app.use(express.json());
app.use('/recetas', recetasRouter);

app.listen(3001, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://localhost:3001`);
});

module.exports = app;
