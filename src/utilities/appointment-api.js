import sendRequest from './send-request';


const BASE_URL = '/api/appointments';

export async function createAppointment(formData) {
    return sendRequest(BASE_URL, 'POST', formData );
    
  }

export const getAppointmentById = async (appointmentId) => {

};

export function getAll() {
  return sendRequest(BASE_URL);
}

export function deleteAppointment(appointmentId) {
  const url = `${BASE_URL}/${appointmentId}`;
  return sendRequest(url, 'DELETE');
}

export function updateAppointment(appointmentId,formData) {
  const url = `${BASE_URL}/${appointmentId}`;
  return sendRequest(url, 'PUT', formData);
}

export const getAppointmentsByDate = async (selectedDate) => {
  try {
    const response = await fetch(`${BASE_URL}/appointmentsByDate/${selectedDate}`);

    if (!response.ok) {
      throw new Error(`Failed ${response.status}`);
    }

    const data = await response.json();
    console.log(data)
    
    return data;
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
};

