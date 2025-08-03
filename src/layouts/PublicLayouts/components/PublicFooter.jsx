import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;
const PublicFooter = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Welcome to this Authentication ©{new Date().getFullYear()} Created by
      Melese
    </Footer>
  );
};

export default PublicFooter;
