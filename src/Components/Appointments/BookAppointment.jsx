import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppointmentForm from './AppointmentForm';
import '../../Styling/BookAppointment.css';

const BookAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    // Fetch available (not booked) appointments
    axios.get('http://localhost:8000/api/appointments/available')
      .then(res => setAppointments(res.data))
      .catch(err => console.error('Error fetching appointments:', err));
  }, []);

  if (selectedAppointment) {
    // Show booking form if an appointment is selected
    return (
      <AppointmentForm 
        appointment={selectedAppointment} 
        onCancel={() => setSelectedAppointment(null)} 
        onBooked={() => {
          // After booking, reset and reload appointments
          setSelectedAppointment(null);
          axios.get('http://localhost:8000/api/appointments/available')
            .then(res => setAppointments(res.data))
            .catch(err => console.error(err));
        }}
      />
    );
  }

  return (
    <div className="book-appointment-list-container">
      <h2>Available Appointments</h2>
      
      {appointments.length === 0 ? (
        <div className="no-appointments">
          <p>No available appointments at the moment.</p>
        </div>
      ) : (
        <ul className="appointments-list">
          {appointments.map(appt => (
            <li key={appt.id} className="appointment-item">
              <div className="appointment-info">
                <div className="appointment-type">{appt.appointmentType}</div>
                <div className="appointment-details">
                  {new Date(appt.date).toLocaleDateString()} at {appt.time}
                </div>
                <div className="appointment-price">${appt.originalCost.toFixed(2)}</div>
              </div>
              <button 
                className="book-button"
                onClick={() => setSelectedAppointment(appt)}
              >
                Book
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookAppointment;