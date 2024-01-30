import sendRequest from './send-request';

const BASE_URL = '/api/appointments';

export async function createAppointment(formData) {
    return sendRequest(BASE_URL, 'POST', formData );
    
  }

 
const API_URL = '/api/appointments';
export const getAppointmentById = async (appointmentId) => {
  try {
    const response = await fetch(`${API_URL}/${appointmentId}`);
    if (!response.ok) {
      throw new Error(`Failed Status: ${response.status}`);
    }
    const appointmentData = await response.json();
    return appointmentData;
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
};
