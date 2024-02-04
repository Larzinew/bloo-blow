import React, { useState, useEffect } from 'react';
import AppointmentForm from '../../components/AppointmentForm/AppointmentForm';
import AppointmentDetail from '../../components/AppointmentDetail/AppointmentDetail';
import * as appointmentAPI from '../../utilities/appointment-api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AppointmentPage() {
  const [appointments, setAppointments] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const showToastMessage = () => {
    toast.success("Success Notification !", {
      // position: toast.POSITION.TOP_LEFT,
    });    
  };

  const addAppointment = async (newAppointment) => {
    const createdAppointment = await appointmentAPI.createAppointment(newAppointment);
    setAppointments([...appointments, createdAppointment]);
    showToastMessage();
  };

  async function fetchAppointments() {
    const fetchedAppointments = await appointmentAPI.getAll();
    setAppointments(fetchedAppointments);
  }

  function updateAppointment(newAppt) {
    const apptsCopy = [...appointments];
    const idx = apptsCopy.findIndex((appt) => appt._id === newAppt);
    apptsCopy.splice(idx, 1, newAppt);
    setAppointments(apptsCopy);
  }

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="container mt-5">
      <h1>New Appointment</h1>
      <AppointmentForm addAppointment={addAppointment} />

      <div className="row mt-3">
        {appointments.map((appointment) => (
          <div key={appointment._id} className="col-md-4 mb-3">
            <AppointmentDetail
              appointment={appointment}
              fetchAppointments={fetchAppointments}
              updateAppointment={updateAppointment}
            />
          </div>
        ))}
        </div>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
}
a