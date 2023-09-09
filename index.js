function updateDate() {
  const day = document.getElementById("day");
  const utcTime = document.getElementById("time");

  // Function to get and display the current day of the week and UTC time in milliseconds
  function displayDate() {
    const now = new Date();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDay = daysOfWeek[now.getDay()];
    const utcMilli = now.getTime();

    day.textContent = currentDay;
    utcTime.textContent = utcMilli;
  }

  
  displayDate();

  
  setInterval(displayDate, 10);
}


updateDate();
