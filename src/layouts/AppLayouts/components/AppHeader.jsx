import React from "react";
import {
  Layout,
  Menu,
  Button,
  Badge,
  Avatar,
  Dropdown,
  Popconfirm,
  message,
} from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
  UserOutlined,
  LogoutOutlined,
  ProfileOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const AppHeader = ({
  setCollapsed,
  collapsed,
  isMobile,
  setMobileDrawerVisible,
}) => {
  const handleLogout = () => {
    message.success("Logged out successfully");
    // Add your logout logic here
  };

  const userMenuItems = [
    {
      key: "profile",
      icon: <ProfileOutlined />,
      label: "Profile",
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Settings",
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: (
        <Popconfirm
          title="Are you sure to logout?"
          onConfirm={handleLogout}
          okText="Yes"
          cancelText="No"
        >
          Logout
        </Popconfirm>
      ),
    },
  ];

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0 16px",
        background: "#fff",
        boxShadow: "0 1px 4px rgba(0, 21, 41, 0.08)",
      }}
    >
      {/* Collapse button - left side */}
      <Button
        type="text"
        icon={
          collapsed ? (
            <MenuUnfoldOutlined style={{ color: "#800080" }} />
          ) : (
            <MenuFoldOutlined style={{ color: "#800080" }} />
          )
        }
        onClick={() =>
          isMobile ? setMobileDrawerVisible(true) : setCollapsed(!collapsed)
        }
        style={{
          width: 48,
          height: 48,
          marginRight: 16,
        }}
      />

      {/* Spacer - pushes right items to the end */}
      <div style={{ flex: 1 }} />

      {/* Right side icons */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {/* Notification badge */}
        <Badge count={5} style={{ cursor: "pointer" }}>
          <BellOutlined
            style={{
              fontSize: 18,
              color: "#800080",
              padding: "8px 12px",
            }}
          />
        </Badge>

        {/* User avatar dropdown */}
        <Dropdown
          menu={{ items: userMenuItems }}
          placement="bottomRight"
          trigger={["click"]}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
              padding: "8px 12px",
            }}
          >
            <Avatar
              icon={<UserOutlined />}
              style={{
                backgroundColor: "#800080",
                color: "#fff",
              }}
            />
            <span style={{ color: "#800080" }}>User Name</span>
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default AppHeader;
