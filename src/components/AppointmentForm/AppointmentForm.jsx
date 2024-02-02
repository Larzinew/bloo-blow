import React, { useState } from 'react';


const AppointmentForm = ({ addAppointment }) => {
  const [formData, setFormData] = useState({
    date: '',
    clientName: '',
    time: '09:00',
    serviceType: 'Wash and Style',
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
        clientName: '',
        time: '09:00',
        serviceType: 'Wash and Style',
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
        <button type="submit">Schedule Appointment</button>
    </form>
  );
};

export default AppointmentForm;
