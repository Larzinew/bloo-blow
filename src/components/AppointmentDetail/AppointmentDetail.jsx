import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as appointmentAPI from '../../utilities/appointment-api';

const AppointmentDetailPage = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAppointmentDetails();
  }, [appointmentId]);

  const fetchAppointmentDetails = async () => {
    try {
      const fetchedAppointment = await appointmentAPI.getAppointmentById(appointmentId);
      setAppointment(fetchedAppointment);
    } catch (error) {
      console.error('Error', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Your Appointment Details</h2>
      {loading ? (
        <p>Loading appointment details...</p>
      ) : appointment ? (
        <div>
          <p>Date: {appointment.date}</p>
          <p>Time: {appointment.time}</p>
          <p>Client Name: {appointment.clientName}</p>
          <p>Service Type: {appointment.serviceType}</p>
          <p>Status: {appointment.status}</p>
          <p>Duration: {appointment.duration}</p>
        </div>
      ) : (
        <p>Appointment not found</p>
      )}
    </div>
  );
};

export default AppointmentDetailPage;
