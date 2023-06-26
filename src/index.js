import { Task } from "./Task.js";
import { Tag } from "./Tag.js";
import { Project } from "./Project.js";
import { App } from "./App.js";
import { generateCalendar } from "./calendar.js";
import { ASide } from "./views/ASide.js";

import "./style.css";

const moment = require("moment");

function component(App) {
  const appView = document.createElement("div");
  appView.classList.add("flex", "h-full");

  appView.appendChild(ASide(App));

  //create and append right col

  return appView;
}

function refreshPage(App) {
  document.body.innerHTML = "";
  document.body.appendChild(component(App));
}

const toDo = new App();
const personal = new Project("Personal", toDo);

let myTask = new Task("visit the doctor", personal);
myTask.setDueDate("2023-06-26");

myTask.addTag(new Tag("downtown", "green", "orange", toDo));
myTask.addTag(new Tag("health", "white", "red", toDo));

myTask.priority = true;

let myotherTask = new Task("get the groceries", personal);
myotherTask.setDueDate("2023-06-29");

myotherTask.addTag(new Tag("downtown", "green", "orange", toDo));
myotherTask.addTag(new Tag("health", "white", "red", toDo));

document.body.classList.add("flex", "flex-col", "h-screen");
refreshPage(toDo);
console.log(toDo.getUpcomingTasks(7));

// console.log(toDo.getTodaysTasks().length.toString());
// console.log(myTask.dueDate.toString());
// function getCircularReplacer() {
//   const ancestors = [];
//   return function (key, value) {
//     if (typeof value !== "object" || value === null) {
//       return value;
//     }
//     // `this` is the object that value is contained in,
//     // i.e., its direct parent.
//     while (ancestors.length > 0 && ancestors.at(-1) !== this) {
//       ancestors.pop();
//     }
//     if (ancestors.includes(value)) {
//       return "[Circular]";
//     }
//     ancestors.push(value);
//     return value;
//   };
// }

// var calendarContainer = document.getElementById("calendar-container");
// calendarContainer.innerHTML = "";
// generateCalendar(calendarContainer, 5, 2023);
// // console.log(JSON.stringify(personal));
// console.log(JSON.stringify(toDo, getCircularReplacer()));
