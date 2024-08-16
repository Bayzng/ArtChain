const express = require('express');
const Art = require('../models/Art');
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const arts = await Art.find();
    res.json(arts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/', async (req, res) => {
  try {
    
    const { image, creatorImage, title, description, price, creatorName } = req.body;

    const art = new Art({
      image: image, 
      title: title,
      description: description,
      price: price,
      creatorName: creatorName,
      creatorImage: creatorImage 
    });

    
    const newArt = await art.save();
    res.status(201).json(newArt);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
