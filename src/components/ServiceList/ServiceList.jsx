import React, { useState, useEffect } from 'react';
import * as appointmentAPI from '../../utilities/appointment-api';
import AppointmentForm from './AppointmentForm';
import AppointmentDetailPage from '../../pages/AppointmentDetail/AppointmentDetail';

const AppointmentsListPage = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const fetchedAppointments = await appointmentAPI.createAppointment();
      setAppointments(fetchedAppointments);
    } catch (error) {
      console.error('Error', error);
    }
  };

  const addAppointment = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  };

  return (
    <div>
        <h2>My Appointment</h2>
        <div className='appointment-list'>
            <ul>
                {appointments.map((appointment) => (
                    <div className={'appointment'}>
                    <Link key={appointment._id} to={`appointments/${appointment._id}`}></Link>
                        <li>
                        <p>Date: {appointment.date}</p>
                        <p>Time: {appointment.time}</p>
                        <p>Client Name: {appointment.clientName}</p>
                        <p>Service Type: {appointment.serviceType}</p>
                        <p>Status: {appointment.status}</p>
                        <p>Duration: {appointment.duration}</p>
                    </li>
                    <AppointmentDetailPage appointment={appointment} />
                    </div>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default AppointmentsListPage;