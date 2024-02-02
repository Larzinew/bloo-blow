const Appointment = require('../../models/appointment');

module.exports = {
    create,
    index,
    deleteAppointment,
    updateAppointment,
    getAppointmentByDate,
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

async function deleteAppointment(req, res) {
  try {
    const deletedAppointment = await Appointment.deleteOne({ _id: req.params.id });
    res.json(deletedAppointment);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
}
async function updateAppointment(req, res) {
  try {
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, {  new: true, runValidators: true });
    res.json(appointment);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
}
async function getAppointmentByDate(req, res){
  try{
    const selectedDate = req.params.date;
    console.log(selectedDate)
    const appointments = await Appointment.find({ date: selectedDate });

    res.json({ success: true, appointments });
  } catch (error) {
    console.error('Error', error);
    res.status(500).json({ success: false, error: 'Error' });
  }
};