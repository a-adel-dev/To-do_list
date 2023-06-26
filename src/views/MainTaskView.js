import todaySVG from "../img/Today.svg";
import prioritySVG from "../img/priority.svg";
import upcomingSVG from "../img/upcoming.svg";

import { MainTaskTagComponent } from "./MainTaskTagComponent";

export function MainTaskView(App) {
  const mainTasks = document.createElement("div");

  const classList = ["main-tasks", "flex", "flex-col", "gap-2", "pt-16"];
  mainTasks.classList.add(...classList);

  for (let i = 0; i < 3; i++) {
    const mainTask = document.createElement("div");
    mainTask.classList.add("task", "flex", "justify-between");
    mainTasks.appendChild(mainTask);
  }

  const today = mainTasks.children[0];
  const todaysTasks = App.getTodaysTasks.bind(App);
  MainTaskTagComponent(today, todaySVG, "Today", todaysTasks);

  const priority = mainTasks.children[1];
  const priorityTasks = App.getPriorityTasks.bind(App);
  MainTaskTagComponent(priority, prioritySVG, "Priority Tasks", priorityTasks);

  const upcoming = mainTasks.children[2];
  const upcomingTasks = App.getUpcomingTasks.bind(App);
  MainTaskTagComponent(upcoming, upcomingSVG, "Upcoming Tasks", upcomingTasks);

  return mainTasks;
}
