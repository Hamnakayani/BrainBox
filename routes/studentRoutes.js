const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Protected route
router.get('/dashboard', protect, async (req, res) => {
  res.json(req.student); 
});

module.exports = router;
