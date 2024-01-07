import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Community,
  Videos,
  News,
  Article,
  Header,
  Launches,
} from "./components";

// Separate routing configuration
const routes = [
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/article",
        element: <Article />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/videos",
        element: <Videos />,
      },
      {
        path: "/launches",
        element: <Launches />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
