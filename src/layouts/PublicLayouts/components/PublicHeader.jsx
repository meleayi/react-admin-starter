import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { appRoutes } from "../../../routes/routeConfigs";

const { Header } = Layout;

const PublicHeader = () => {
  const publicMenuItems = appRoutes.public.map((route) => ({
    key: route.path,
    label: <Link to={route.path}>{route.component.replace("Page", "")}</Link>,
  }));

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // background: "#8d6c17  ",

        padding: "0px",
        height: "64px",
        margin: "0px",
      }}
    >
      <div
        style={{ marginRight: "24px", display: "flex", alignItems: "center" }}
      >
        <Link to="/">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="rounded-full p-4 h-20 w-20"
          />
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["/"]}
        items={publicMenuItems}
        style={{
          width: "auto", // Let the menu content determine width
          borderBottom: "none",
          lineHeight: "64px",
          background: "transparent", // Remove default menu background
        }}
        className="hover:text-[#fbbf24 ]"
      />
    </Header>
  );
};

export default PublicHeader;
