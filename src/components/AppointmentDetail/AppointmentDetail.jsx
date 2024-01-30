const AppointmentDetailPage = ({appointment}) => {


  return (
    <div>
      <h2>Your Appointment Details</h2>
      <div>
        <p>Date: {appointment.date}</p>
        <p>Time: {appointment.time}</p>
        <p>Client Name: {appointment.clientName}</p>
        <p>Service Type: {appointment.serviceType}</p>
        <p>Status: {appointment.status}</p>
        <p>Duration: {appointment.duration}</p>
      </div>
    </div>
  );
};

export default AppointmentDetailPage;
