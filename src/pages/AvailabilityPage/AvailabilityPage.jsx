import MonthlyCalendar from '../../components/MonthlyCalendar/MonthlyCalendar'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AvailabilityPage ({ }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [availability, setAvailability] = useState(null);

  useEffect(() => {
    if (selectedDate) {
      checkAvailability(selectedDate);
    }
  }, [selectedDate]);

  const handleDateClick = (date) => {
    console.log('Selected Date:', date);
    setSelectedDate(date);
  };

  const checkAvailability = async (date) => {
    try {
  
      const success = true;
      const available = true;

      setAvailability(available);
    } catch (error) {
      console.error('Error checking availability:', error);
    }
  };

 
    return (
    <div className="container mt-5">
      <h2 className="mb-4">Monthly Calendar</h2>
        <MonthlyCalendar />
    </div>
  );
};
