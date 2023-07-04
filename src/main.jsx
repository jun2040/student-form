import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home.page";
import NewStudent from "./pages/NewStudent.page";
import StudentDetail from "./pages/StudentDetail.page";
import EditStudent from "./pages/EditStudent.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "new",
    element: <NewStudent />,
  },
  {
    path: "details",
    children: [
      {
        path: ":student_id",
        element: <StudentDetail />,
      },
      {
        // path: ":student_id/edit",
        // element: <EditStudent />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
