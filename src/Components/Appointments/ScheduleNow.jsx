import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Styling/ScheduleNow.css";

const ScheduleNow = () => {
  const navigate = useNavigate();

  return (
    <div className="schedule-now-container">
      <h1 className="schedule-title">Schedule a Service</h1>
      <p className="schedule-subtitle">
        Choose the service you’d like to book for your horse
      </p>

      <div className="schedule-button-group">
        <button
          className="schedule-service-btn"
          onClick={() => navigate("/Equine-Edge-Sports-Therapy/schedule/magnawave")}
        >
          MagnaWave Therapy
        </button>

        <button
          className="schedule-service-btn"
          onClick={() => navigate("/Equine-Edge-Sports-Therapy/schedule/redlight")}
        >
          Red Light Therapy
        </button>

        <button
          className="schedule-service-btn"
          onClick={() => navigate("/Equine-Edge-Sports-Therapy/schedule/massage")}
        >
          Massage Therapy
        </button>
      </div>
    </div>
  );
};

export default ScheduleNow;
