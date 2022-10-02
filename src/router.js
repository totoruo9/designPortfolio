import React from 'react';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import About from './Routers/About';
import Home from './Routers/Home';
import Ddbdd from './Routers/works/Ddbdd';
import EventPage from './Routers/works/Eventpage';
import IamWebApp from './Routers/works/Iamwebapp';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
        path: '/works/iamminiwebapp',
        element: <IamWebApp />
    },
    {
        path: '/works/eventpage',
        element: <EventPage />
    },
    {
        path: '/works/ddbdd',
        element: <Ddbdd />
    }
  ]);
  