import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './pages/App';
import AboutUs from './pages/AboutUs';
import reportWebVitals from './reportWebVitals';
import Members from './pages/Members';
import OnlineServices from './pages/OnlineServices';
import OurPartners from './pages/OurPartners';
import Downloads from './pages/Downloads';
import SiteMap from './pages/SiteMap';
import ContactsUs from './pages/ContactsUs';
import EmptyPage from './pages/EmptyPage';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/about-us",
    element: <AboutUs />,
  },

  {
    path: "/members",
    element: <Members />,
  },

  {
    path: "/our-partners",
    element: <OurPartners />,
  },

  {
    path: "/online-services",
    element: <OnlineServices />,
  },

  {
    path: "/downloads",
    element: <Downloads />,
  },

  {
    path: "/site-map",
    element: <SiteMap/>,
  },

  {
    path: "/contact-us",
    element: <ContactsUs/>,
  },

  {
    path: "/empty-page",
    element: <EmptyPage/>,
  },
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
