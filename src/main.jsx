import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CoursePage from "./pages/CoursePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import EptControlPge from "./pages/EptControlPge.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import "./index.css";
import "@fontsource/kumbh-sans"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },{
        path: "/about",
        element: <AboutPage />,
      },{
        path: "/courses",
        element: <CoursePage />,
      },{
        path: "/Contact",
        element: <ContactPage />,
      },{
        path: "/blogs",
        element: <BlogPage />,
      },{
        path:"/epttest",
        element:<EptControlPge />
      }
      
    ],
    errorElement:<ErrorPage/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
