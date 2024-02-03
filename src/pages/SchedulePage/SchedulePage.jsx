import React, { useState, useEffect } from 'react';
import { getAppointmentsByDate } from '../../utilities/appointment-api';
import { useParams } from 'react-router-dom';

const SchedulePage = () => {
  const { selectedDate } = useParams();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const appts = await getAppointmentsByDate(selectedDate);
      setAppointments(appts);
    };
    fetchAppointments();
  }, [selectedDate]);

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Appointments on {selectedDate}</h3>
      {appointments.length > 0 ? (
        <ul className="list-group">
          {appointments.map((appointment) => (
            <li key={appointment._id} className="list-group-item">
              <p className="mb-1">Time: {appointment.time}</p>
              <p className="mb-1">Client Name: {appointment.clientName}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No appointments scheduled on this date. The date and time are free.</p>
      )}
    </div>
  );
};

export default SchedulePage;
