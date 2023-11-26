const MINUTES_IN_HOUR = 60;

const getMinutes = (time) => {
  const[hour, minutes] = time.split(':').map(Number);
  return hour * MINUTES_IN_HOUR + minutes;
};

const countTime = (startDay, endDay, startMeeting, duration) => {
  const startDayMinutes = getMinutes(startDay);
  const endDayMinutes = getMinutes(endDay);
  const meetingMinutes = getMinutes(startMeeting);

  const durationMeeting = meetingMinutes + duration <= endDayMinutes;
  const startOfMeeting = meetingMinutes >= startDayMinutes;

  return durationMeeting && startOfMeeting;
};

countTime('8:00', '17:30', '14:00', 220);
