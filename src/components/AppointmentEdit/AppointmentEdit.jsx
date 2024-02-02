import { useState} from 'react';
import * as appointmentAPI from '../../utilities/appointment-api';

const EditAppointmentPage = ({appointment, updateAppointment}) => {
  const [formData, setFormData] = useState({
    date: formatDate(appointment.date),
    clientName: appointment.clientName,
    serviceType: appointment.serviceType
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newAppointment = await appointmentAPI.updateAppointment(appointment._id, formData);
      
      updateAppointment(newAppointment)

    } catch (error) {
      console.error('Error updating appointment', error);
    }
  };

  function formatDate (date) {
    const newDate = new Date(date)
    return newDate.getFullYear().toString().padStart(4, '0') + '-' + (newDate.getMonth()+1).toString().padStart(2, '0') + '-' + newDate.getDate().toString().padStart(2, '0')
  }

  return (
    <div>
      <h2>Edit Appointment</h2>
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
         <input type="text" name="clientName" value={formData.clientName} onChange={handleChange} required />
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
        <button type="submit">Update Appointment</button>
      </form>
    </div>
  );
};

export default EditAppointmentPage;
