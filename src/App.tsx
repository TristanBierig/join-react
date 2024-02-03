import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./components/ErrorPage";
import BoardPage from "./routes/BoardPage";
import SummaryPage from "./routes/SummaryPage";
import AddTaskPage from "./routes/AddTaskPage";
import ContactsPage from "./routes/ContactsPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "summary",
          element: <SummaryPage />,
        },
        {
          path: "add-task",
          element: <AddTaskPage />,
        },
        {
          path: "board",
          element: <BoardPage />,
        },
        {
          path: "contacts",
          element: <ContactsPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
