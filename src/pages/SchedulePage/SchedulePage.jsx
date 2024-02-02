import { useState, useEffect } from 'react';
import { getAppointmentsByDate } from '../../utilities/appointment-api';
import { useParams } from 'react-router-dom';



export default function SchedulePage ({}) {
    const {selectedDate} = useParams()
    console.log(selectedDate)

        const [appointments, setAppointments] = useState([]);
      
      useEffect(() => {
        const fetchAppointments = async () => {
          const appts = await getAppointmentsByDate(selectedDate)
            setAppointments(appts)
          }
          fetchAppointments()
        }, [selectedDate])

        return (
          <div>
            <h3>Appointments on {selectedDate}</h3>
            {appointments.length > 0 ? (
              <ul>
                {appointments.map((appointment) => (
                  <li key={appointment._id}>
                    <p>Time: {appointment.time}</p>
                    <p>Client Name: {appointment.clientName}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No appointments scheduled on this date. The date and time are free.</p>
            )}
          </div>
        );
      };