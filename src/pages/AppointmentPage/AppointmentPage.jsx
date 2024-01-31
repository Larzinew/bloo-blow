import { useState, useEffect } from 'react';
import AppointmentForm from '../../components/AppointmentForm/AppointmentForm';
import AppointmentDetail from '../../components/AppointmentDetail/AppointmentDetail';
import * as appointmentAPI from '../../utilities/appointment-api';
import AppointmentEdit from '../../components/AppointmentEdit/AppointmentEdit'

export default function AppointmentPage() {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = async (newAppointment) => {
    const createdAppointment = await appointmentAPI.createAppointment(newAppointment);
    setAppointments([...appointments, createdAppointment]);
  };
  async function fetchAppointments() {
  
    const fetchedAppointments = await appointmentAPI.getAll();
    setAppointments(fetchedAppointments);
    
  
  }

  function updateAppointment(newAppt) {
    const apptsCopy = [...appointments]
    const idx = apptsCopy.findIndex(appt => appt._id === newAppt)
    apptsCopy.splice(idx, 1, newAppt)
    setAppointments(apptsCopy)
  }

  useEffect(() => {
   fetchAppointments();
  }, []);

  return (
    <div className="app-container">
      <h1>New Appointment</h1>
      <AppointmentForm addAppointment={addAppointment} />
      {appointments.map((appointment) => (
        <AppointmentDetail key={appointment._id} appointment={appointment} fetchAppointments={fetchAppointments} updateAppointment={updateAppointment}/>
      ))}
    </div>
  );
}
