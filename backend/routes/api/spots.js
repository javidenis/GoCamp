const express = require('express');
const db = require('../../db/models')
const { asyncHandler, handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
    const spots = await db.Spot.findAll();
    return res.json(spots);
}));

router.post('/new', asyncHandler(async (req, res) => {
    const { name, city, state, image, price, description, userId } = req.body
    const spot = await db.Spot.create({ name, city, state, image, price, description, userId });
    return res.json(spot);
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const { name, city, state, image, price, description, userId, id } = req.body
    const spot = await db.Spot.findByPk(req.body.id);
    await spot.update({ name, city, state, image, price, description, userId});
    return res.json(spot);
}));

router.delete("/:id", asyncHandler(async (req, res) => {
    const spot = await db.Spot.findByPk(req.params.id)
    if (spot) {
        await spot.destroy()
        res.json({ message: 'Spot successfully deleted' })
    } else {
        res.json({ message: 'Failed to delete the spot' })
    }
}))

module.exports = router;