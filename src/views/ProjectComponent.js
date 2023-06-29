{
  /* <div class="projects-header mt-20 flex justify-between items-center">
          <div class="projects-tag flex gap-2">
            <button id="projects-unfold-button">
              <img src="./arrow.svg" id="projects-arrow" alt="" />
            </button>
            <h1 class="font-bold">Projects</h1>
          </div>
          <button
            class="font-bold text-slate-50 w-7 h-7 text-2xl bg-blue-400 rounded-full text-center p-0 leading-4 pb-1"
          >
            +
          </button>
        </div> */
}

import arrowSVG from "../img/arrow.svg";
import { RenderApp } from "./RenderApp";

export function ProjectsComponent(App) {
  const element = document.createElement("div");
  element.classList.add("mt-20", "flex", "justify-between", "items-center");

  const projectTag = document.createElement("div");
  projectTag.classList.add("flex", "gap-2");

  const unfoldButton = document.createElement("button");

  const Icon = new Image();
  Icon.src = arrowSVG;
  unfoldButton.appendChild(Icon);
  if (App.projectsExpanded === false) {
    Icon.style.transform = "rotate(-90deg)";
  } else {
    Icon.style.transform = "rotate(0deg)";
  }

  unfoldButton.addEventListener("click", () => {
    //expand projects
    App.projectsExpanded = !App.projectsExpanded;
    RenderApp(App, App.getFilter());
  });

  projectTag.appendChild(unfoldButton);

  const text = document.createElement("button");
  text.classList.add("font-bold");
  text.innerHTML = "Projects";
  text.addEventListener("click", () => {
    //expand projects
    App.projectsExpanded = !App.projectsExpanded;
    RenderApp(App, App.getFilter());
  });

  projectTag.appendChild(text);
  element.appendChild(projectTag);

  const addProjectButton = document.createElement("button");
  addProjectButton.classList.add(
    "font-bold",
    "text-slate-50",
    "w-7",
    "h-7",
    "text-2xl",
    "bg-blue-400",
    "rounded-full",
    "text-center",
    "p-0",
    "leading-4",
    "pb-1"
  );
  addProjectButton.innerHTML = "+";

  addProjectButton.addEventListener("click", (e) => {
    App.newProjectDialoge = true;
    RenderApp(App, App.getFilter());
  });

  element.appendChild(addProjectButton);

  return element;
}
