const router = require('express').Router();
const { catModel } = require('../models');

router.get('/getAll', async function (req, res, next) {
  try {
    const cats = await catModel.find();
    res.json(cats);
  } catch (err) {
    return next({ status: 404, msg: 'woopsie' });
  }
});

router.post('/create', async ({ body }, res, next) => {
  try {
    const created = await catModel.create(body);
    res.status(201).json(created);
  } catch (err) {
    return next({ status: 500, msg: 'oops' });
  }
});

router.delete('/remove/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await catModel.findByIdAndDelete(id);
    res.json(deleted);
  } catch (err) {
    return next({ status: 500, msg: 'dam it' });
  }
});

router.patch('/update/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await catModel.findByIdAndUpdate(id, req.query, {
      returnDocument: 'after',
    });
    res.json(updated);
  } catch (err) {
    return next({ status: 500, msg: 'dam it' });
  }
});

module.exports = router;
