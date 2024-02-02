import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import AppointmentPage from '../AppointmentPage/AppointmentPage';
import AvailabilityPage from '../AvailabilityPage/AvailabilityPage'
import SchedulePage from '../SchedulePage/SchedulePage';




export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path='/appointment/new' element={<AppointmentPage />} />
              <Route path='/availability' element={<AvailabilityPage />} />
              <Route path='/schedule/:selectedDate' element={<SchedulePage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
  
}
