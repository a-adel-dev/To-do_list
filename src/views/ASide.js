import { MainTaskView } from "./MainTaskView";
import { ProjectsComponent } from "./ProjectComponent";
import { ProjectSideComponent } from "./ProjectSideComonent";
import { SideTaskComponent } from "./sideTaskComponent";

export function ASide(App) {
  const element = document.createElement("div");

  const classList = [
    "left-col",
    "w-80",
    "h-full",
    "p-10",
    "bg-slate-50",
    "drop-shadow-lg",
  ];
  element.classList.add(...classList);

  element.appendChild(MainTaskView(App));

  element.appendChild(ProjectsComponent(App));

  if (App.projectsExpanded) {
    App.projectList.forEach((project) => {
      element.appendChild(ProjectSideComponent(App, project));
    });
  }

  return element;
}
