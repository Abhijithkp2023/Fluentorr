import React from "react";
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource/kumbh-sans"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CoursePage from "./pages/CoursePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import EptControlPge from "./pages/EptControlPge.jsx";

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
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
