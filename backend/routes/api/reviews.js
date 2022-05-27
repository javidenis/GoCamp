const express = require('express');
const db = require('../../db/models')
const {asyncHandler, handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// router.get("/", asyncHandler(async (req, res) => {
//     const reviews = await db.Review.findAll();
//     return res.json(reviews);
// }));

router.post('/', asyncHandler(async (req, res) => {
    const review = await db.Review.create(req.body);
    return res.json(review);
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const id = await db.Review.update(req.body);
    const review = await db.Review.one(id);
    return res.json(review);
}));

router.delete("/:id", asyncHandler(async (req, res) => {
    const review = await db.Review.findByPk(req.params.id)
    if (review) {
        await review.destroy()
        res.json({ message: 'Review successfully deleted' })
    } else {
        res.json({ message: 'Failed to delete the review' })
    }
}))

module.exports = router;