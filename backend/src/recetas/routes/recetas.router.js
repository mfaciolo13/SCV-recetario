const express = require('express');

const { recetasService } = require('../services/recetas.service');

const recetasRouter = express.Router();

recetasRouter.get('/', async (req, res) => {
  const recetas = await recetasService.getRecetas(req.params);
  res.json({ total: recetas.length, recetas });
});

recetasRouter.get('/:id', async (req, res) => {
  const receta = await recetasService.getRecetaById(req.params.id);
  res.json({ receta });
});

recetasRouter.patch('/:id', async (req, res) => {
  const receta = await recetasService.updateReceta(req.params.id, req.body);
  res.json({ receta });
});

exports.recetasRouter = recetasRouter;
