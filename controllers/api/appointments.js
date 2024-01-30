const Appointment = require('../../models/appointment');

module.exports = {
    create
  };

async function create(req, res) {
  console.log(req.body)
    try {
        // Add the appointment to the db
        const appointment = await Appointment.create(req.body);
        res.json(appointment);
      } catch (err) {
        console.log(err)
        res.status(400).json(err);
      }
}