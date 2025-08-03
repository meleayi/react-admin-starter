import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const ProtectedRoute = ({
  isAuthenticated,
  userRoles = [],
  requiredPermissions = [],
  isLoading, 
  children,
  redirectPath = "/login",
  notAuthorizedPath = "/unauthorized",
}) => {
  
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spin indicator={antIcon} tip="Loading permissions..." size="large" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  const hasPermission =
    requiredPermissions.length === 0 ||
    requiredPermissions.some((perm) => userRoles.includes(perm));

  if (!hasPermission) {
    return <Navigate to={notAuthorizedPath} replace />;
  }

  return children ? children : <Outlet />;
};
export default ProtectedRoute;
