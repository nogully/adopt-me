import { createRoot } from "react-dom/client"; // import only what you need
import { Link, BrowserRouter, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SearchParams from "./SearchParams";
import Details from "./Details";
// one way data flow, you pass data down, not up - props

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity, // ie once you fetch, don't refetch
      }
    }
  }
);
// a higher order component that is creating context to components within it
// can set params on query-by-query basis to limit API usage

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="" element={<SearchParams />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
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
