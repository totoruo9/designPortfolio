import ErrorPage from 'Routers/Error';
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
import Bannerpage from './Routers/works/Bannerpage';
import Cleaner from './Routers/works/Cleaner';
import Ddbdd from './Routers/works/Ddbdd';
import EventPage from './Routers/works/Eventpage';
import IamWebApp from './Routers/works/Iamwebapp';
import Nanalil from './Routers/works/Nanalil';
import Productpage1 from './Routers/works/Productpage1';
import Productpage2 from './Routers/works/Productpage2';
import Snspage from './Routers/works/Snspage';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "/about",
      element: <About />,
    },
    {
        path: 'works/iamwebapp',
        element: <IamWebApp />
    },
    {
        path: '/works/eventpage',
        element: <EventPage />
    },
    {
        path: '/works/ddbdd',
        element: <Ddbdd />
    },
    {
        path: '/works/productpage',
        element: <Productpage1 />
    },
    {
        path: '/works/productpage2',
        element: <Productpage2 />
    },
    {
        path: '/works/bannerpage',
        element: <Bannerpage />
    },
    {
        path: '/works/cleaner',
        element: <Cleaner />
    },
    {
        path: '/works/snspage',
        element: <Snspage />
    },
    {
        path: '/works/nanalil',
        element: <Nanalil />
    }
    
  ], {
    // git page 배포시 basename 필요!!!!!!!!! 주석 해제하고 npm run deploy합시다~~
    // basename: '/designPortfolio'
  });
  