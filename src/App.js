import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./components/Welcome";
import HomePage from "./components/HomePage";

const router = createBrowserRouter([
  {
    path: "/", element: <Welcome />,
  },
  { path: "/homepage", element: <HomePage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;