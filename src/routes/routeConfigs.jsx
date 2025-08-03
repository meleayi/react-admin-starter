import React from "react";
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
export const appRoutes = {
  public: [
    { path: "/", component: "HomePage" },
    { path: "/auth", component: "AuthenticationPage" },
    { path: "/contact", component: "ContactPage" },
    { path: "/about", component: "AboutPage" },
  ],

  protected: [
    {
      path: "/dashboard",
      component: "DashboardPage",
      permissions: ["admin", "super_admin"],
      menuItem: {
        title: "Dashboard",
        icon: <DashboardOutlined />,
      },
    },
    {
      path: "/profile",
      component: "ProfilePage",
      permissions: ["customer", "admin", "super_admin"],
      menuItem: {
        title: "My Profile",
        icon: <UserOutlined />,
      },
    },
    {
      path: "/settings",
      component: "SettingPage",
      permissions: ["super_admin"],
      menuItem: {
        title: "System Settings",
        icon: <SettingOutlined />,
      },
    },
  ],
};

export const getMenuItems = (userRoles = []) => {
  return appRoutes.protected
    .filter(
      (route) =>
        route.menuItem &&
        route.permissions.some((perm) => userRoles.includes(perm))
    )
    .map((route) => ({
      key: route.path,
      icon: route.menuItem.icon,
      label: route.menuItem.title,
    }));
};
