import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../../Styling/CreateAppointment.css';

const SERVICE_TYPE_MAP = {
  magnawave: 'MagnaWave PEMF',
  redlight: 'Red Light Therapy',
  massage: 'Therapeutic Massage',
};

const CreateAppointment = () => {
  const { serviceType } = useParams();

  const [appointmentType, setAppointmentType] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [originalCost, setOriginalCost] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  /** ✅ SET SERVICE TYPE FROM ROUTE */
  useEffect(() => {
    const resolvedType = SERVICE_TYPE_MAP[serviceType];
    if (resolvedType) {
      setAppointmentType(resolvedType);
    }
  }, [serviceType]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const newAppointment = {
        adminId: '687937d1e03c5fd61d38e937',
        appointmentType,
        description,
        date: new Date(date),
        time,
        originalCost: parseFloat(originalCost),
        discountedCost: parseFloat(originalCost),
        isPaid: false,
        isBooked: false,
        location,
        notes,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await axios.post(
        'http://localhost:8000/api/appointments/create',
        newAppointment
      );

      setSuccessMsg('Appointment created successfully!');
      setDescription('');
      setDate('');
      setTime('');
      setOriginalCost('');
      setLocation('');
      setNotes('');
    } catch (err) {
      console.error(err);
      setErrorMsg('Failed to create appointment.');
    }

    setLoading(false);
  };

  return (
    <div className="create-appointment-container">
      <h2>Create New Appointment</h2>

      {successMsg && <div className="success-message">{successMsg}</div>}
      {errorMsg && <div className="error-message">{errorMsg}</div>}

      <form onSubmit={handleSubmit}>
        <label>
          Appointment Type:
          <input type="text" value={appointmentType} readOnly />
        </label>

        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>

        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>

        <label>
          Original Cost ($):
          <input
            type="number"
            min="0"
            step="0.01"
            value={originalCost}
            onChange={(e) => setOriginalCost(e.target.value)}
            required
          />
        </label>

        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </label>

        <label>
          Notes (optional):
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Appointment'}
        </button>
      </form>
    </div>
  );
};

export default CreateAppointment;
