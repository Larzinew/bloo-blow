import React, { useState } from 'react';
import AppointmentForm from '../../components/AppointmentForm/AppointmentForm';
import AppointmentDetail from '../../components/AppointmentDetail/AppointmentDetail';

export default function AppointmentPage() {
    const [appointments, setAppointments] = useState([]);

    const addAppointment = (newAppointment) => {
      newAppointment.id = appointments.length + 1;
      setAppointments([...appointments, newAppointment]);
    };
    return (
        <div className="app-container">
        <h1>New Appointment</h1>
        <AppointmentForm addAppointment={addAppointment} />
        {appointments.map((appointment) => (
          <AppointmentDetail key={appointment.id} appointment={appointment} />
        ))}
      </div>
    );
  };
  
