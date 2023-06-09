import TodaySVG from "./today.svg";
import PrioritySVG from "./priority.svg";
import UpcomingSVG from "./upcoming.svg";

export class ViewMainTasks {
  constructor() {
    this.mainTasks = document.createElement("div");
    this.mainTasks.classList.add("maintasks");

    const todayIcon = this.createSVGIcon(TodaySVG);
    this.mainTasks.appendChild(
      this.CreateMaintaskPair(todayIcon, "Today", 0, "num-todays-tasks")
    );

    const upcomingIcon = this.createSVGIcon(UpcomingSVG);
    this.mainTasks.appendChild(
      this.CreateMaintaskPair(upcomingIcon, "Upcoming", 0, "num-upcoming-tasks")
    );

    const priorityIcon = this.createSVGIcon(PrioritySVG);
    this.mainTasks.appendChild(
      this.CreateMaintaskPair(
        priorityIcon,
        "Priority Tasks",
        0,
        "num-priority-tasks"
      )
    );

    return this.mainTasks;
  }

  CreateMaintaskPair(icon, name, num, id) {
    const element = document.createElement("div");
    element.classList.add("maintask");
    const tag = document.createElement("div");
    tag.classList.add("maintask-tag");

    const svg = document.createElement("div");
    svg.classList.add("icon");
    svg.appendChild(icon);
    tag.appendChild(svg);

    const nameElement = document.createElement("h2");
    nameElement.innerHTML = name;
    tag.appendChild(nameElement);

    element.appendChild(tag);

    const numElement = document.createElement("p");
    numElement.id = id;
    numElement.innerHTML = num;
    element.appendChild(numElement);

    return element;
  }

  createSVGIcon(icon) {
    const Icon = new Image();
    Icon.src = icon;
    return Icon;
  }
}
