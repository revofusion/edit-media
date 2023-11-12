import { Flowbite, useThemeMode } from "flowbite-react";
import type { FC } from "react";
import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "@class/api/firebase";
import { useAuthStore } from "@stores/auth";
import theme from "../theme";
import NavbarSidebarLayout from "./navbar-sidebar";

const Wrapper: FC<{
  enableNavbarSidebar: boolean,
  authenticated: boolean
}> = function ({ enableNavbarSidebar, authenticated = true }) {
  const dark = localStorage.getItem("theme") === "dark";
  const authStore = useAuthStore()
  const navigate = useNavigate()
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      authStore.setUser(user)

      if (user && user.emailVerified) {
        navigate('/')
      }
    });
  }, [])

  if (authenticated && (!authStore.user || !authStore.user.emailVerified)) {
    return (
      <Navigate to={'/authentication/sign-in'} />
    )
  }

  return (
    <Flowbite theme={{ dark, theme }}>
      <PersistFlowbiteThemeToLocalStorage />
      {enableNavbarSidebar ? (
        <NavbarSidebarLayout>
          <Outlet />
        </NavbarSidebarLayout>
      ) : (
        <Outlet />
      )}
    </Flowbite>
  );
};

const PersistFlowbiteThemeToLocalStorage: FC = function () {
  const [themeMode] = useThemeMode();

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  return <></>;
};

export default Wrapper;
