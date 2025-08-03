import React from "react";
import { Layout } from "antd";
import PublicHeader from "./components/PublicHeader";
import PublicFooter from "./components/PublicFooter";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

export const PublicLayout = () => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        margin: "0px",
        padding: "0px",
      }}
    >
      <PublicHeader />
      <Content
        style={{
          flex: 1,
          padding: "24px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "1200px" }}>
          <Outlet /> 
        </div>
      </Content>
      <PublicFooter />
    </Layout>
  );
};
