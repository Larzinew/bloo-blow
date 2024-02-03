import { useState } from 'react';
import * as appointmentAPI from '../../utilities/appointment-api';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const EditAppointmentPage = ({ appointment, updateAppointment }) => {
  const [formData, setFormData] = useState({
    date: formatDate(appointment.date),
    clientName: appointment.clientName,
    serviceType: appointment.serviceType,
    time: appointment.time,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newAppointment = await appointmentAPI.updateAppointment(appointment._id, formData);
      updateAppointment(newAppointment);
    } catch (error) {
      console.error('Error updating appointment', error);
    }
  };

  function formatDate(date) {
    const newDate = new Date(date);
    return (
      newDate.getFullYear().toString().padStart(4, '0') +
      '-' +
      (newDate.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      newDate.getDate().toString().padStart(2, '0')
    );
  }

  return (
    <div className="container mt-5">
      <h2>Edit Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Date:</label>
          <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Time:</label>
          <select name="time" value={formData.time} onChange={handleChange} className="form-control" required>
            <option value="09:00">9 AM</option>
            <option value="10:00">10 AM</option>
            <option value="11:00">11 AM</option>
            <option value="12:00">12 PM</option>
            <option value="13:00">1 PM</option>
            <option value="14:00">2 PM</option>
            <option value="15:00">3 PM</option>
            <option value="16:00">4 PM</option>
            <option value="17:00">5 PM</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Client Name:</label>
          <input type="text" className="form-control" name="clientName" value={formData.clientName} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Service Type:</label>
          <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="form-control" required>
            <option value="Wash and Style">Wash and Style</option>
            <option value="Updo">Updo</option>
            <option value="Braiding">Braiding</option>
            <option value="Curling">Curling</option>
            <option value="Straightening">Straightening</option>
            <option value="Deep Conditioning">Deep Conditioning</option>
            <option value="Scalp Treatment">Scalp Treatment</option>
            <option value="Hair Cut">Hair Cut</option>
            <option value="Hair Coloring">Hair Coloring</option>
            <option value="Extensions">Extensions</option>
            <option value="Makeup Application">Makeup Application</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Update Appointment</button>
      </form>
    </div>
  );
};

export default EditAppointmentPage;
