const express = require('express');
const db = require('../../db/models')
const { asyncHandler, handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
    const spots = await db.Spot.findAll();
    return res.json(spots);
}));

router.post('/new', asyncHandler(async (req, res) => {
    const spot = await db.Spot.create(req.body);
    return res.json(spot);
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const id = req.params['id']
    const spot = await db.Spot.findByPk(id);
    await spot.update(req.body);
    return res.json(spot);
}));

router.delete("/:id", asyncHandler(async (req, res) => {
    const spot = await db.Spot.findByPk(req.params.id)
    if (spot) {
        await spot.destroy()
        res.json(req.params.id)
    } 
}))

module.exports = router;