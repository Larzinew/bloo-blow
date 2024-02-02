const express = require('express');
const router = express.Router();
const appointmentCtrl = require('../../controllers/api/appointments');


// POST /api/appointment (create a user - makes an appointment)
router.post('/', appointmentCtrl.create);
// GET /api/appointments (list appointments)
router.get('/', appointmentCtrl.index);
// DELETE /api/appointment (cancel appointment)
router.delete('/:id', appointmentCtrl.deleteAppointment)
//UPDATE /api/appointment (update appointment)
router.put('/:id', appointmentCtrl.updateAppointment)
// GET /schedule/date (see if there are avaiable appointments by date)
router.get('/appointmentsByDate/:date', appointmentCtrl.getAppointmentByDate)


module.exports = router;
