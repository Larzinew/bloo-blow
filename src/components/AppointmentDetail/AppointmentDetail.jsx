import * as appointmentAPI from '../../utilities/appointment-api';
import AppointmentEdit from '../AppointmentEdit/AppointmentEdit';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AppointmentDetailPage = ({ appointment, fetchAppointments, updateAppointment }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = async () => {
    try {
      await appointmentAPI.deleteAppointment(appointment._id);
      await fetchAppointments();
    } catch (error) {
      console.error('Error', error);
    }
  };

  const handleClick = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div className="container mt-5">
      <h2>Your Appointment Details</h2>
      <div>
        <p>Date: {appointment.date}</p>
        <p>Time: {appointment.time}</p>
        <p>Client Name: {appointment.clientName}</p>
        <p>Service Type: {appointment.serviceType}</p>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete Appointment
        </button>
        <button className="btn btn-secondary" onClick={handleClick}>
          Show Edit
        </button>
        {showEdit ? <AppointmentEdit appointment={appointment} updateAppointment={updateAppointment} /> : null}
      </div>
    </div>
  );
};

export default AppointmentDetailPage;
