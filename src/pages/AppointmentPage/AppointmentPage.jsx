import { useState, useEffect } from 'react';
import AppointmentForm from '../../components/AppointmentForm/AppointmentForm';
import AppointmentDetail from '../../components/AppointmentDetail/AppointmentDetail';
import * as appointmentAPI from '../../utilities/appointment-api';

export default function AppointmentPage() {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = async (newAppointment) => {
    const createdAppointment = await appointmentAPI.createAppointment(newAppointment);
    setAppointments([...appointments, createdAppointment]);
  };

  useEffect(() => {
    async function fetchAppointments() {
  
      const fetchedAppointments = await appointmentAPI.getAll();
      setAppointments(fetchedAppointments);
    
    }

    fetchAppointments();
  }, []);

  return (
    <div className="app-container">
      <h1>New Appointment</h1>
      <AppointmentForm addAppointment={addAppointment} />
      {appointments.map((appointment) => (
        <AppointmentDetail key={appointment._id} appointment={appointment} />
      ))}
    </div>
  );
}
