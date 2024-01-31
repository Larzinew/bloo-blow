import { useState, useEffect } from 'react';
import * as appointmentAPI from '../../utilities/appointment-api';

const EditAppointmentPage = ({ appointmentId, history }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    clientName: '',
    serviceType: '',
    duration: '',
  });

  useEffect(() => {
    fetchAppointment();
  }, [appointmentId]);

  const fetchAppointment = async () => {
    try {
      const existingAppointment = await appointmentAPI.getAppointmentById(
        appointmentId
      );
      setFormData(existingAppointment);
    } catch (error) {
      console.error('Error', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await appointmentAPI.updateAppointment(appointmentId, formData);
      history.push('/appointments');
    } catch (error) {
      console.error('Error updating appointment', error);
    }
  };

  return (
    <div>
      <h2>Edit Appointment</h2>
      <form onSubmit={handleSubmit}>
        {/* Your form fields go here, similar to the create form */}
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Update Appointment</button>
      </form>
    </div>
  );
};

export default EditAppointmentPage;
