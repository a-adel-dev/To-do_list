import { ViewMainTasks } from "./ViewMainTasks";

export class viewLayer {
  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("two-column-container");

    this.leftDiv = document.createElement("div");
    this.leftDiv.classList.add("left-column");
    this.container.appendChild(this.leftDiv);

    this.leftDiv.append(new ViewMainTasks());

    this.rightDiv = document.createElement("div");
    this.rightDiv.classList.add("right-column");
    this.container.appendChild(this.rightDiv);
  }

  updateTodaysTasks(num) {}

  createSVGIcon(icon) {
    const Icon = new Image();
    Icon.src = icon;

    return Icon;
  }

  addToParent(parent) {
    parent.appendChild(this.container);
  }
}
