import { MainTaskView } from "./MainTaskView";
import { ProjectComponent } from "./ProjectComponent";
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
  // const func = () => {};
  // element.appendChild(
  //   SideTaskComponent(App.getProjectList()[0].taskList[0]),
  //   func
  // );

  element.appendChild(ProjectComponent(App));

  return element;
}
