import React from "react";
import "../styles/CalenderView.css";

const UpcomingSchedule = ({ upcomingAppointments }) => (
  <div className="upcoming-container">
    <h3 className="upcoming-heading">The Upcoming Schedule</h3>

    {upcomingAppointments.map((dayGroup, index) => (
      <div key={index} className="upcoming-day-group">
        <div className="upcoming-day">{dayGroup.day}</div>

        <div className="upcoming-appointments">
          {dayGroup.appointments.map((appointment, idx) => (
            <div key={idx} className="upcoming-card">
              <div className="upcoming-card-header">
                <div className="upcoming-title">
                  <div>{appointment.title}</div>
                  {appointment.icon === "check" && (
                    <div className="icon-check">🩺</div>
                  )}
                  {appointment.icon === "eye" && (
                    <div>👁️</div>
                  )}
                  {appointment.icon === "heart" && (
                    <div>❤️</div>
                  )}
                  {appointment.icon === "brain" && (
                    <div>👨‍⚕️</div>
                  )}
                </div>
              </div>
              <div className="upcoming-time">{appointment.time}</div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default UpcomingSchedule;
