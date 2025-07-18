import React, { useState } from 'react';
import axios from 'axios';
import '../../Styling/AppointmentForm.css';

const AppointmentForm = ({ appointment, onCancel, onBooked }) => {
  const [numberOfHorses, setNumberOfHorses] = useState(1);
  const [notes, setNotes] = useState('');
  const [discountCode, setDiscountCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Here we update the appointment with client booking info
      const updatedAppointment = {
        ...appointment,
        numberOfHorses,
        notes,
        discountCodeUsed: discountCode,
        isBooked: true,
        clientId: 'CURRENT_CLIENT_ID', // replace with logged in client id or auth context
        updatedAt: new Date(),
      };

      await axios.put(`http://localhost:8000/api/appointments/${appointment.id}/book`, updatedAppointment);

      setLoading(false);
      onBooked();  // Notify parent to refresh list or whatever
    } catch (err) {
      setError('Failed to book appointment. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="appointment-form-container">
      <h2>Book Appointment: {appointment.appointmentType}</h2>
      
      <div className="appointment-details">
        <p>Date: {new Date(appointment.date).toLocaleDateString()} Time: {appointment.time}</p>
        <p>Price: ${appointment.originalCost.toFixed(2)}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Number of Horses:
          <input 
            type="number" 
            min="1" 
            value={numberOfHorses} 
            onChange={e => setNumberOfHorses(parseInt(e.target.value, 10))} 
            required 
          />
        </label>

        <label>
          Notes:
          <textarea 
            value={notes} 
            onChange={e => setNotes(e.target.value)} 
            placeholder="Any special instructions or notes..."
          />
        </label>

        <label>
          Discount Code:
          <input 
            type="text"
            value={discountCode} 
            onChange={e => setDiscountCode(e.target.value)} 
            placeholder="Enter discount code if available"
          />
        </label>

        {error && <div className="appointment-form-error">{error}</div>}

        <div className="button-container">
          <button type="submit" disabled={loading}>
            {loading ? 'Booking...' : 'Confirm Booking'}
          </button>
          <button type="button" onClick={onCancel} disabled={loading}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;