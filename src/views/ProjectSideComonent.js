import arrowSVG from "../img/arrow.svg";
import { RenderApp } from "./RenderApp";
import { SideTaskComponent } from "./SideTaskComponent";

export function ProjectSideComponent(App, project) {
  const element = document.createElement("div");
  element.classList.add("ml-3");

  const projectSideTag = document.createElement("div");
  projectSideTag.classList.add("flex", "justify-between", "items-center");

  const projectTag = document.createElement("div");
  projectTag.classList.add("flex", "gap-2");

  const unfoldButton = document.createElement("button");

  const Icon = new Image();
  Icon.src = arrowSVG;
  unfoldButton.appendChild(Icon);
  if (project.taskListExpanded === false) {
    Icon.style.transform = "rotate(-90deg)";
  } else {
    Icon.style.transform = "rotate(0deg)";
  }

  const expand = function () {
    project.taskListExpanded = !project.taskListExpanded;
    RenderApp(App, App.getFilter());
  };

  unfoldButton.addEventListener("click", expand);

  projectTag.appendChild(unfoldButton);

  const text = document.createElement("button");
  text.classList.add("font-bold");
  text.innerHTML = project.name;
  text.addEventListener("click", expand);

  projectTag.appendChild(text);
  projectSideTag.appendChild(projectTag);

  const addProjectButton = document.createElement("button");
  addProjectButton.classList.add(
    "font-bold",
    "w-7",
    "h-7",
    "text-2xl",
    "text-center",
    "mb-2"
  );
  addProjectButton.innerHTML = "+";

  addProjectButton.addEventListener("click", () => {
    App.newTaskDialoge = true;
    App.currentProject = project;
    console.log("setting current project to " + project.name);
    RenderApp(App, App.getFilter());
  });

  projectSideTag.appendChild(addProjectButton);

  element.appendChild(projectSideTag);
  if (project.taskListExpanded === true) {
    project.taskList.forEach((task) => {
      element.appendChild(
        SideTaskComponent(task, () => {
          App.currentTask = task;
          App.taskView = true;
          RenderApp(App, App.getFilter());
        })
      );
    });
  }

  return element;
}
