export const calendarData = {
  month: "October 2021",
  days: [
    {
      date: 25,
      day: "Mon",
      appointments: ["10:00", "11:00", "12:00"],
      isActive: false,
      isPast: false,
    },
    {
      date: 26,
      day: "Tues",
      appointments: [
        { time: "08:00", type: "normal" },
        { time: "09:00", type: "current" },
        { time: "10:00", type: "normal" },
      ],
      isActive: true,
      isPast: false,
    },
    {
      date: 27,
      day: "Wed",
      appointments: ["12:00", "—", "13:00"],
      isActive: false,
      isPast: false,
    },
    {
      date: 28,
      day: "Thurs",
      appointments: [
        { time: "10:00", type: "normal" },
        { time: "11:00", type: "scheduled" },
        "—",
      ],
      isActive: false,
      isPast: false,
    },
    {
      date: 29,
      day: "Fri",
      appointments: ["—", "14:00", "16:00"],
      isActive: false,
      isPast: false,
    },
    {
      date: 30,
      day: "Sat",
      appointments: [{ time: "12:00", type: "scheduled" }, "14:00", "15:00"],
      isActive: false,
      isPast: false,
    },
    {
      date: 31,
      day: "Sun",
      appointments: [{ time: "09:00", type: "scheduled" }, "10:00", "11:00"],
      isActive: false,
      isPast: true,
    },
  ],
};

export const upcomingAppointments = [
  {
    day: "On Thursday",
    appointments: [
      {
        title: "Health checkup complete",
        time: "11:00 AM",
        icon: "check",
      },
      {
        title: "Ophthalmologist",
        time: "14:00 PM",
        icon: "eye",
      },
    ],
  },
  {
    day: "On Saturday",
    appointments: [
      {
        title: "Cardiologist",
        time: "12:00 AM",
        icon: "heart",
      },
      {
        title: "Neurologist",
        time: "16:00 PM",
        icon: "brain",
      },
    ],
  },
];


export const getAppointmentTypeClass = (type) => {
  switch (type) {
    case "current":
      return "current";
    case "scheduled":
      return "scheduled";
    default:
      return "normal";
  }
};


export const formatTime = (time) => {
  if (time === "—" || time === "--") {
    return "—";
  }
  return time;
};


export const isToday = (date) => {
  const today = new Date();
  return today.getDate() === date;
};


export const getDayStatus = (day) => {
  if (day.isPast) return "past";
  if (day.isActive) return "active";
  return "normal";
};
