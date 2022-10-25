import { createRoot } from "react-dom/client"; // import only what you need
import SearchParams from "./SearchParams";
// one way data flow, you pass data down, not up - props

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
// createRoot is new way of rendering to the DOM
// vs ReactDOM.render(container, <App/>) (still works tho - "legacy")
// new react18 concurrency mode
root.render(<App />); 
// give createElement a component and it will render all the children. You could put them in as arguments but we are explicit up top.
// component must always return markup
