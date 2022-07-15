const express = require('express');

const { recetasService } = require('../services/recetas.service');

const recetasRouter = express.Router();

recetasRouter.get('/', async (req, res) => {
  const results = await recetasService.getRecetas(req.query);
  res.json({ total: results.length, results });
});

recetasRouter.get('/:id', async (req, res) => {
  const results = await recetasService.getRecetaById(req.params.id);
  res.json({ results });
});

recetasRouter.patch('/:id', async (req, res) => {
  const results = await recetasService.updateReceta(req.params.id, req.body);
  res.json({ results });
});

exports.recetasRouter = recetasRouter;
