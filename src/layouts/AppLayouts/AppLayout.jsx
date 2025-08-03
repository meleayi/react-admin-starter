import React, { useState, useEffect } from "react";
import { Layout, Drawer } from "antd";
import AppHeader from "./components/AppHeader";
import AppSider from "./components/AppSider";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

export const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileDrawerVisible, setMobileDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768 && mobileDrawerVisible) {
        setMobileDrawerVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileDrawerVisible]);

  return (
    <Layout style={{ minHeight: "100vh", margin: 0, padding: 0 }}>
      <AppHeader
        setCollapsed={setCollapsed}
        collapsed={collapsed}
        isMobile={isMobile}
        setMobileDrawerVisible={setMobileDrawerVisible}
      />

      <Layout>
        {/* Desktop Sidebar */}
        {!isMobile && <AppSider collapsed={collapsed} isMobile={isMobile} />}

        {/* Mobile Drawer */}
        <Drawer
          placement="left"
          closable={true}
          onClose={() => setMobileDrawerVisible(false)}
          open={mobileDrawerVisible}
          bodyStyle={{ padding: 0 }}
          width={200}
        >
          <AppSider collapsed={false} isMobile={true} />
        </Drawer>

        {/* Content Area */}
        <Content
          style={{
            marginLeft: !isMobile && !collapsed ? 250 : !isMobile ? 80 : 0,
            transition: "margin-left 0.2s",
            padding: 24,
            minHeight: "calc(100vh - 64px)",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
