import React from 'react';

import { Link } from 'react-router-dom'

export default function DateComponent ({day, month, year, isFirst, selectedDate, setSelectedDate, today}) {
    
    const date = new Date(year, month, day)
    date.setHours(0,0,0,0)

    const getWeekDay = () => {
        return new Date(year, month, day).getDay() + 1;
    }

    const getAppts = () => {
        let appts = 'date'
        if (selectedDate === day) {
            appts += ' selected'
        }
        if (day === today.getDate() && today.getMonth() === date.getMonth() && today.getFullYear() === date.getFullYear()){
            appts += ' today'
        }
        else if (today > date){
            appts += ' past'
        }
        return appts
    }

 
    


    return isFirst ? (
        <Link to={`/schedule/${month+1}-${day}-${year}`} id={'date-component'} className={getAppts()} style={{ gridColumnStart: getWeekDay() }} data-testid="date-component">
        {day}
      </Link>
    ) : (
      <Link to={`/schedule/${month+1}-${day}-${year}`} id={'date-component'} className={getAppts()} >
        {day}
      </Link>
    );
};