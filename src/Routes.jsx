import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Dashboard5 from "pages/Dashboard5";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "dashboard5",
      element: <Dashboard5 />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
