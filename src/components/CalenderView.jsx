import React from "react";
import { calendarData } from "../data/calendarData";
import "../styles/CalenderView.css";
import { RiArrowLeftFill } from "react-icons/ri";
import { RiArrowRightFill } from "react-icons/ri";
import UpcomingSchedule from "./UpcomingSchedule";
import { upcomingAppointments } from "../data/calendarData";

const CalendarView = () => {
  const renderAppointment = (appointment) => {
    if (typeof appointment === "string") {
      return <div className="appointment-slot">{appointment}</div>;
    }

    const getAppointmentClass = (type) => {
      switch (type) {
        case "current":
          return "appointment-slot current";
        case "scheduled":
          return "appointment-slot scheduled";
        default:
          return "appointment-slot";
      }
    };

    return (
      <div className={getAppointmentClass(appointment.type)}>
        {appointment.type === "scheduled" && (
          <span className="appointment-dot">•</span>
        )}
        {appointment.time}
      </div>
    );
  };

  return (
    <div className="calendar-wrapper">
      <div className="calendar-container">
        {/* Header */}
        <div className="calendar-header">
          <h3 className="calendar-month">{calendarData.month}</h3>
          <div className="calendar-nav-buttons">
            <button className="calendar-nav-button">
              <RiArrowLeftFill style={{ color: "#3736A8" }} />
            </button>
            <button className="calendar-nav-button">
              <RiArrowRightFill style={{ color: "#3736A8" }} />
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="calendar-grid">
          {calendarData.days.map((day, index) => (
            <div
              key={index}
              className={`calendar-cell ${day.isActive ? "active" : ""} ${
                day.isPast ? "past" : ""
              }`}
            >
              <div className="calendar-day">{day.day}</div>
              <div className="calendar-date">{day.date}</div>
              <div className="calendar-appointments">
                {day.appointments.map((appointment, idx) => (
                  <div key={idx}>{renderAppointment(appointment)}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Appointment Cards */}
        <div className="appointment-cards-container">
          <div className="appointment-card dentist">
            <div className="appointment-card-header">
              <span className="appointment-title">Dentist</span>
              <span className="appointment-icon">🦷</span>
            </div>
            <div className="appointment-time">09:00 - 11:00</div>
            <div className="appointment-doctor">Dr. Cameron Williamson</div>
          </div>

          <div className="appointment-card physiotherapy">
            <div className="appointment-card-header">
              <span className="appointment-title">
                Physiotherapy Appointment
              </span>
              <span className="appointment-icon">🏃</span>
            </div>
            <div className="appointment-time">11:00 - 12:00</div>
            <div className="appointment-doctor">Dr. Kevin Djones</div>
          </div>
        </div>

        {/** Upcoming Schedul */}
        <UpcomingSchedule upcomingAppointments={upcomingAppointments} />
      </div>
    </div>
  );
};

export default CalendarView;
