import React, { useState } from 'react';
import * as appointmentAPI from '../../utilities/appointment-api'

const AppointmentForm = ({ addAppointment }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    clientName: '',
    serviceType: '',
    status: 'Scheduled',
    duration: '', // Add duration to the initial state
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      
      addAppointment(formData);
     
      setFormData({
        date: '',
        time: '',
        clientName: '',
        serviceType: '',
        status: 'Scheduled',
        duration: '',
      });
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </label>

      <br />

      <label>
        Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
      </label>

      <br />

      <label>
        Duration:
         <input type="duration" name="duration" value={formData.duration} onChange={handleChange} required />
      </label>

      <br />

      <label>
        Client Name:
         <input type="text" name="clientName" value={formData.customerName} onChange={handleChange} required />
      </label>

      <br />

      <label>
        Service Type:
        <select name="serviceType" value={formData.serviceType} onChange={handleChange}required>
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
      </label>

      <br />

      <label>
        Status:
        <select name="status" value={formData.status} onChange={handleChange}required>
          <option value="Book">Book Appointment</option>
          <option value="Reschedule">Re-Schedule</option>
          <option value="Cancel">Cancel</option>
        </select>
      </label>
      
      <br />
        <button type="submit">Add Appointment</button>
    </form>
  );
};

export default AppointmentForm;
