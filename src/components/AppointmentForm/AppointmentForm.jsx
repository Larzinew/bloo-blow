import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AppointmentForm = ({ addAppointment }) => {
  const [formData, setFormData] = useState({
    date: '',
    clientName: '',
    time: '09:00',
    serviceType: 'Wash and Style',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      addAppointment(formData);
      setFormData({
        date: '',
        clientName: '',
        time: '09:00',
        serviceType: 'Wash and Style',
      });
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
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
        <input type="text" className="form-control" name="clientName" value={formData.customerName} onChange={handleChange} required />
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

      <button type="submit" className="btn btn-primary">Schedule Appointment</button>
    </form>
  );
};

export default AppointmentForm;
