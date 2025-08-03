import React, { useState } from "react";
import { Card, Image, Tabs } from "antd";
import LoginComponents from "../../components/Auth/loginComponents";
import RegisterComponents from "../../components/Auth/registerComponents";

const { TabPane } = Tabs;

const AuthModule = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="flex min-h-screen bg-white">
      <div className="hidden lg:flex lg:w-1/2 h-full flex-col justify-center items-center bg-gray-50 p-8">
        <div className="max-w-md flex flex-col items-center gap-6 text-center">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="h-50 w-50 object-contain rounded-full"
          />
          <p className="text-gray-600 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2  flex justify-center items-center p-0 sm:p-2">
        <Card className="w-full max-w-md shadow-lg">
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            centered
            className="w-full"
            tabBarStyle={{ marginBottom: 24 }}
          >
            <TabPane tab="Login" key="login">
              <div className="p-4">
                <LoginComponents setActiveTab={setActiveTab} />
              </div>
            </TabPane>
            <TabPane tab="Register" key="register">
              <div className="p-4">
                <RegisterComponents setActiveTab={setActiveTab} />
              </div>
            </TabPane>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default AuthModule;
