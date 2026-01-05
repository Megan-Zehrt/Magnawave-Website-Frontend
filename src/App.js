import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Components/HomePage/LandingPage';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import AdminPanel from './Components/Admin/Profile/AdminPanel';
import SignInAccount from './Components/Clients/SignInAccount';
import CreateAccount from './Components/Clients/CreateAccount';
import ProfilePage from './Components/Clients/ProfilePage';
import AdminCreate from './Components/Admin/Profile/AdminCreate';
import AdminSignIn from './Components/Admin/Profile/AdminSignIn';
import WebsiteContentEditor from './Components/Admin/Editor/WebsiteContentEditor';
import BookAppointment from './Components/Appointments/BookAppointment';
import AppointmentForm from './Components/Appointments/AppointmentForm';
import CreateAppointment from './Components/Appointments/CreateAppointment';
import Services from './Components/Services/Services';

function App() {
  return (
    <>
      <NavBar /> {/* ✅ Can be rendered above the Routes */}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Equine-Edge-Sports-Therapy" element={<LandingPage />} />

        {/* ADMIN ROUTE */}
        <Route path="/Equine-Edge-Sports-Therapy/Admin-Panel" element={ <AdminPanel /> } />
        <Route path="/Equine-Edge-Sports-Therapy/Admin-SignIn" element={ <AdminSignIn /> } />
        <Route path="/Equine-Edge-Sports-Therapy/Admin-Create-Account" element={ <AdminCreate /> } />
        <Route path="/Equine-Edge-Sports-Therapy/Admin-Editorial" element={ <WebsiteContentEditor /> } />

        {/* CLIENT ROUTE */}
        <Route path="/Equine-Edge-Sports-Therapy/My-Profile/:id" element={ <ProfilePage /> } />
        <Route path="/Equine-Edge-Sports-Therapy/Create-Account" element={ <CreateAccount /> } />
        <Route path="/Equine-Edge-Sports-Therapy/Sign-In" element={ <SignInAccount /> } />

        {/* APPOINTMENT / SERVICES ROUTES */}
        <Route path="/Equine-Edge-Sports-Therapy/book-appointment" element={ <AppointmentForm /> } />
        <Route path="/Equine-Edge-Sports-Therapy/available-appointments" element={ <BookAppointment /> } />
        <Route path="/Equine-Edge-Sports-Therapy/create-available-appointments" element={ <CreateAppointment /> } />
        <Route path="/Equine-Edge-Sports-Therapy/services" element={ <Services /> } />

        {/* ADMIN PROFLE & INFORMATION */}
        <Route path="/Equine-Edge-Sports-Therapy/profile" element={ <AdminPanel/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
