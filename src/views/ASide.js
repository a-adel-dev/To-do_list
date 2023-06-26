import { MainTaskView } from "./MainTaskView";

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

  return element;
}
