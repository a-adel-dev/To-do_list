const moment = require("moment");

export function createHeaderWithTitle(title) {
  const header = document.createElement("div");
  header.classList.add("flex", "justify-between");

  const titleElement = document.createElement("h1");
  titleElement.classList.add("today-date", "font-extrabold", "text-2xl");
  titleElement.innerHTML = title;

  const todayDateElement = createTodayDateElement();

  header.appendChild(titleElement);
  header.appendChild(todayDateElement);

  return header;
}

export function createTodayDateElement() {
  const todayDateElement = document.createElement("h1");
  todayDateElement.classList.add(
    "today-date",
    "font-extrabold",
    "text-2xl",
    "text-right",
    "mb-4"
  );

  const currentDate = moment().format("dddd, MMMM Do, YYYY");
  todayDateElement.textContent = currentDate;

  return todayDateElement;
}
