import { Task } from "./Task.js";
import { Tag } from "./Tag.js";
import { Project } from "./Project.js";
import { App } from "./App.js";
import { generateCalendar } from "./calendar.js";

import "./style.css";

const moment = require("moment");

function component() {
  const toDo = new App();
  const personal = new Project("Personal", toDo);

  let myTask = new Task("visit the doctor", personal);

  myTask.addTag(new Tag("downtown", "green", "orange", toDo));
  myTask.addTag(new Tag("health", "white", "red", toDo));

  // const element = document.createElement("div");
  // const twoColumns = new viewLayer();

  // twoColumns.addToParent(element);

  return element;
}

// document.body.appendChild(component());
const toDo = new App();
const personal = new Project("Personal", toDo);

let myTask = new Task("visit the doctor", personal);

myTask.addTag(new Tag("downtown", "green", "orange", toDo));
myTask.addTag(new Tag("health", "white", "red", toDo));

function getCircularReplacer() {
  const ancestors = [];
  return function (key, value) {
    if (typeof value !== "object" || value === null) {
      return value;
    }
    // `this` is the object that value is contained in,
    // i.e., its direct parent.
    while (ancestors.length > 0 && ancestors.at(-1) !== this) {
      ancestors.pop();
    }
    if (ancestors.includes(value)) {
      return "[Circular]";
    }
    ancestors.push(value);
    return value;
  };
}

var calendarContainer = document.getElementById("calendar-container");
calendarContainer.innerHTML = "";
generateCalendar(calendarContainer, 5, 2023);
// // console.log(JSON.stringify(personal));
// console.log(JSON.stringify(toDo, getCircularReplacer()));
