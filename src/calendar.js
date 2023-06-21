const moment = require("moment");

// Generate the calendar
export function generateCalendar(element, month, year) {
  // Use Moment.js to set the specified month and year
  var currentDate = moment().year(year).month(month);

  // Create the calendar container
  var calendarContainer = document.createElement("div");
  calendarContainer.classList.add("calendar");

  // Create the table header
  var headerRow = document.createElement("div");
  headerRow.classList.add("header-row");
  var daysOfWeek = moment.weekdaysShort(); // Get abbreviated day names
  daysOfWeek.forEach(function (day) {
    var headerCell = document.createElement("div");
    headerCell.textContent = day;
    headerRow.appendChild(headerCell);
  });
  calendarContainer.appendChild(headerRow);

  // Get the first day of the specified month
  var firstDayOfMonth = moment(currentDate).startOf("month");

  // Calculate the offset for the first day
  var offset = firstDayOfMonth.day();

  // Get the number of days in the specified month
  var daysInMonth = currentDate.daysInMonth();

  // Calculate the total number of cells required (35)
  var totalCells = 35;

  // Calculate the number of cells to be empty at the start
  var emptyCellsStart = offset;

  // Calculate the number of cells to be empty at the end
  var emptyCellsEnd = totalCells - (daysInMonth + emptyCellsStart);

  // Create calendar cells
  var currentDay = moment(firstDayOfMonth).subtract(emptyCellsStart, "days"); // Adjust the starting day
  for (var i = 0; i < totalCells; i++) {
    // Create a cell for each day
    var dayCell = document.createElement("div");
    dayCell.classList.add("day-cell");
    if (i >= emptyCellsStart && i < totalCells - emptyCellsEnd) {
      dayCell.textContent = currentDay.date();
    }
    calendarContainer.appendChild(dayCell);

    // Move to the next day
    currentDay.add(1, "day");
  }

  // Clear the content of the specified element
  element.innerHTML = "";

  // Append the calendar container to the specified element
  element.appendChild(calendarContainer);
}
