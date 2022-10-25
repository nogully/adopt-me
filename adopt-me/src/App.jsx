import React from "react";
import { createRoot } from "react-dom/client"; // import only what you need
// one way data flow, you pass data down, not up - props

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  // always capitalize component names
  // React.createElement just prints HTML elements for you
  // JSX calls React.createElement FOR YOU
  return React.createElement(
    "div", // literal element tag
    {}, // attributes
    [
      // children inside the div
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, { animal: "Dog", name: "Luna", breed: "Havanese" }),
      React.createElement(Pet, {
        animal: "Bird",
        name: "Pepper",
        breed: "Cockatiel",
      }),
      React.createElement(Pet, { animal: "Cat", name: "Doink", breed: "Mixed" }),
    ]
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
// createRoot is new way of rendering to the DOM
// vs ReactDOM.render(container, <App/>) (still works tho - "legacy")
// new react18 concurrency mode
root.render(React.createElement(App)); // give createElement a component and it will render all the children. You could put them in as arguments but we are explicit up top.
// component must always return markup
