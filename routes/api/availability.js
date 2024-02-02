const express = require('express');
const router = express.Router();
const availabilityCtrl = require('../../controllers/api/appointments');

// POST /api/availability (check availability)
router.post('/', availabilityCtrl.checkAvailability);
// POST /api/availability (check availability)
router.post('/',availabilityCtrl.setAvailability)

module.exports = router;