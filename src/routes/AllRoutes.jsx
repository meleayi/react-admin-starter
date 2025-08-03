import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import NotAuthorizedPage from "../pages/NotAuthorized/NotAuthorizedPage";
import NotFound from "../pages/NotFound/NotFound";
import { PublicLayout } from "../layouts/PublicLayouts/PublicLayout";
import { AppLayout } from "../layouts/AppLayouts/AppLayout";
import DashboardPage from "../pages/app/Home/DashboardPage";
import ProfilePage from "../pages/app/Profile/ProfilePage";
import SettingPage from "../pages/app/Profile/SettingPage";
import HomePage from "../pages/public/HomePage";
import { appRoutes } from "./routeConfigs";
import ProtectedRoute from "../Middleware/ProtectedRoute";
import AuthenticationPage from "../pages/public/AuthenticationPage";
import AboutPage from "../pages/public/AboutPage";
import ContactPage from "../pages/public/ContactPage";

const Pages = {
  DashboardPage,
  ProfilePage,
  SettingPage,
  HomePage,
  AuthenticationPage,
  AboutPage,
  ContactPage,
};

const AllRoutes = () => {
  const { isAuthenticated, userRoles, isLoading } = useAuth(); // Get isLoading

  const renderProtectedRoutes = () => {
    return appRoutes.protected.map((route) => {
      const PageComponent = Pages[route.component];
      if (!PageComponent) {
        console.error(`Component ${route.component} not found in Pages object`);
        return null;
      }
      return (
        <Route
          key={route.path}
          path={route.path}
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              userRoles={userRoles}
              requiredPermissions={route.permissions}
              isLoading={isLoading} // Pass loading state
            >
              <PageComponent />
            </ProtectedRoute>
          }
        />
      );
    });
  };

  const renderPublicRoutes = () => {
    return appRoutes.public.map((route) => {
      const PageComponent = Pages[route.component];
      if (!PageComponent) {
        return null;
      }
      return (
        <Route key={route.path} path={route.path} element={<PageComponent />} />
      );
    });
  };

  return (
    <Routes>
      <Route element={<PublicLayout />}>{renderPublicRoutes()}</Route>

      <Route
        element={
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            userRoles={userRoles}
          />
        }
      >
        <Route element={<AppLayout />}>{renderProtectedRoutes()}</Route>
      </Route>
      <Route path="/unauthorized" element={<NotAuthorizedPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
