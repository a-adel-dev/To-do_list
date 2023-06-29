import { RenderApp } from "./RenderApp";

export function Dialoge(App, content) {
  content.classList.add("mt-12");

  const element = document.createElement("div");

  element.classList.add(
    "w-full",
    "h-full",
    "flex",
    "justify-center",
    "items-center",
    "absolute",
    "top-0",
    "left-0",
    "bg-black",
    "bg-opacity-75"
  );

  const dialoge = document.createElement("div");
  dialoge.classList.add(
    "w-2/5",
    "p-8",
    "bg-slate-200",
    "rounded-lg",
    "relative"
  );

  dialoge.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  const cancelButton = document.createElement("button");
  cancelButton.classList.add(
    "text-slate-50",
    "w-7",
    "h-7",
    "text-2xl",
    "bg-red-400",
    "rounded-full",
    "text-center",
    "p-0",
    "leading-4",
    "pb-2",
    "block",
    "mb-6",
    "absolute",
    "right-6"
  );

  cancelButton.innerHTML = "x";

  cancelButton.addEventListener("click", () => {
    App.newProjectDialoge = false;
    App.newTaskDialoge = false;
    RenderApp(App, App.getFilter());
  });

  dialoge.appendChild(cancelButton);

  dialoge.appendChild(content);

  element.appendChild(dialoge);

  element.addEventListener("click", () => {
    App.newProjectDialoge = false;
    App.newTaskDialoge = false;
    RenderApp(App, App.getFilter());
  });

  return element;
}
