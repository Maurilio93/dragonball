import { StrictMode } from 'react';
import { redirect } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Login } from './components/pagine/Login.jsx';
import { Home } from './components/pagine/Home.jsx';
import { SignUp } from './components/pagine/SignUp.jsx';
import { Dashboard } from './components/pagine/Dashboard.jsx';
import { ModificaPassword } from './components/globali/ModificaPassword.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import PlanetsPage from './components/pagine/PlanetPage.jsx';


function checkIfUserLogged() {
  if (localStorage.getItem("userInfo")) {
    return redirect("/dashboard")
  } else {
    return null;
  }
}

function checkIfUserNotLogged() {
  if (!localStorage.getItem("userInfo")) {
    return redirect("/")
  } else {
    return null;
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
    loader: checkIfUserLogged
  },
  {
    path: "/signup",
    element: <SignUp />,
    loader: checkIfUserLogged

  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    loader: checkIfUserNotLogged
  },
  {
    path: "/modificapassword",
    element: <ModificaPassword />,
  },
  {
    path: "/pianeti",
    element: <PlanetsPage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
