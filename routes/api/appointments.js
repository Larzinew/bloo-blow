const express = require('express');
const router = express.Router();
const appointmentCtrl = require('../../controllers/api/appointments');


// POST /api/appointment (create a user - makes an appointment)
router.post('/', appointmentCtrl.create);
// GET /api/appointments (list appointments)
router.get('/:id', appointmentCtrl.create)

module.exports = router;
