import React, { useState } from "react";
import axios from "axios";
import '../../Styling/ViewAppointment.css';

const ViewAppointment = () => {
    const [email, setEmail] = useState("");
    const [appointmentId, setAppointmentId] = useState("");
    const [appointment, setAppointment] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setAppointment(null);

        try {
            const res = await axios.post("http://localhost:8000/api/appointments/view", {
                email,
                appointmentId
            });

            setAppointment(res.data);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to find appointment");
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = async () => {
        if (!appointment) return;

        try {
            await axios.delete(`http://localhost:8000/api/appointments/${appointment._id}/cancel`);
            setAppointment(null);
            alert("Appointment canceled successfully!");
        } catch (err) {
            alert(err.response?.data?.message || "Failed to cancel appointment");
        }
    };

    return (
        <div className="view-appointment-container">
            <h1>View Your Appointment</h1>
            <p>Enter your email and appointment ID to see your booking details.</p>

            <form className="appointment-form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Your Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input 
                    type="text" 
                    placeholder="Appointment ID" 
                    value={appointmentId}
                    onChange={(e) => setAppointmentId(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? "Loading..." : "View Appointment"}
                </button>
            </form>

            {error && <p className="error">{error}</p>}

            {appointment && (
                <div className="appointment-details">
                    <h2>Appointment Details</h2>
                    <p><strong>Service:</strong> {appointment.serviceName}</p>
                    <p><strong>Date:</strong> {new Date(appointment.date).toLocaleDateString()}</p>
                    <p><strong>Time:</strong> {appointment.time}</p>
                    <p><strong>Status:</strong> {appointment.status}</p>
                    <button className="cancel-button" onClick={handleCancel}>Cancel Appointment</button>
                </div>
            )}
        </div>
    )
}

export default ViewAppointment;
