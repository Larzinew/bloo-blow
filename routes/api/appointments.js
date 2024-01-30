const express = require('express');
const router = express.Router();
const appointmentCtrl = require('../../controllers/api/appointments');


// POST /api/appointment (create a user - makes an appointment)
router.post('/', appointmentCtrl.create);
// GET /api/appointments (list appointments)
router.get('/', appointmentCtrl.index);
// DELETE /api/appointment (cancel appointment)
router.delete('/appointments/:id', appointmentCtrl.index)


module.exports = router;
