import React from "react";
import { Layout, Menu } from "antd";
import { useAuth } from "../../../hooks/useAuth";
import { getMenuItems } from "../../../routes/routeConfigs";
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

const AppSider = ({ collapsed, isMobile }) => {
  const { isAuthenticated, userRoles, isLoading } = useAuth();
  const navigate = useNavigate();

  if (isLoading || !isAuthenticated) return null;

  const menuItems = getMenuItems(userRoles);

  const handleMenuClick = ({ key }) => {
    if (key === "logout") {
      // Handle logout
      console.log("Logging out...");
    } else {
      navigate(key);
    }
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={250}
      collapsedWidth={isMobile ? 0 : 80}
      style={{
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 64,
        bottom: 0,
        zIndex: 10,
      }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={[window.location.pathname]}
        style={{
          height: "100%",
          borderRight: 0,
          paddingTop: "16px",
          display: "flex",
          flexDirection: "column",
        }}
        inlineCollapsed={collapsed}
        items={menuItems}
        onClick={handleMenuClick}
      />
    </Sider>
  );
};

export default AppSider;
