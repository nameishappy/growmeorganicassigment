import "./App.css";
import SecondPage from "./pages/SecondPage";
import UserForm from "./pages/UserForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserForm />,
  },
  {
    path: "/second-page",
    element: <SecondPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
