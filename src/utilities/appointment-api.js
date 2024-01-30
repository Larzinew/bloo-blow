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
