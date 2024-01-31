import { useState, useEffect } from 'react';
import * as appointmentAPI from '../../utilities/appointment-api'

const AppointmentDetailPage = (props) => {
  console.log(props)
  const appointment= props.appointment
  const fetchAppointments= props.fetchAppointments

  const handleDelete = async () => {
    try {
      await appointmentAPI.deleteAppointment(appointment._id);
      await fetchAppointments()
      // const updatedAppointments = appointments.filter(
      //   (appointment) => appointment._id !== appointment._id
      // );
      // setAppointments(updatedAppointments);
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <div>
      <h2>Your Appointment Details</h2>
      <div>
        <p>Date: {appointment.date}</p>
        <p>Time: {appointment.time}</p>
        <p>Client Name: {appointment.clientName}</p>
        <p>Service Type: {appointment.serviceType}</p>
        <p>Duration: {appointment.duration}</p>
        <button onClick={handleDelete}>Delete Appointment</button>
        {/* <button onClick={}>Edit Appointment</button> */}
      </div>
    </div>
  );
  }
export default AppointmentDetailPage;
