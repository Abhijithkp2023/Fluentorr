import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "@fontsource/kumbh-sans";
import Shimmer from "./Components/Shimmer.jsx";

import HomePage from './pages/HomePage'; // Eager loading the homepage
const AboutPage = lazy(() => import('./pages/AboutPage'));
const CoursePage = lazy(() => import('./pages/CoursePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const EptControlPge = lazy(() => import('./pages/EptControlPge'));
const ErrorPage = lazy(() => import('./Components/ErrorPage.jsx'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<Shimmer />}><AboutPage /></Suspense>,
      },
      {
        path: "/programs",
        element: <Suspense fallback={<Shimmer />}><CoursePage /></Suspense>,
      },
      {
        path: "/contact",
        element: <Suspense fallback={<Shimmer />}><ContactPage /></Suspense>,
      },
      {
        path: "/blogs",
        element: <Suspense fallback={<Shimmer />}><BlogPage /></Suspense>,
      },
      {
        path: "/epttest",
        element: <Suspense fallback={<Shimmer />}><EptControlPge /></Suspense>,
      },
    ],
    errorElement: <Suspense fallback={<Shimmer />}><ErrorPage /></Suspense>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
