const Appointment = require('../../models/appointment');

module.exports = {
    create,
    index,
    cancel,
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

async function index(req,res) {
  try{
    const appointments = await Appointment.find({});
    res.json(appointments)
  } catch(err) {
    console.log(err)
    res.status(400).json(err);
  }
}

async function cancel(req, res) {
  try {
    const deletedAppointment = await Appointment.deleteOne({ _id: req.params.id });
    res.json(deletedAppointment);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
}