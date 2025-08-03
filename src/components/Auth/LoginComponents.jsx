import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";

const LoginComponents = ({ setActiveTab }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setActiveTab("register");
  };
  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      style={{ maxWidth: 360 }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a href="">Forgot password</a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button
          block
          type="primary"
          htmlType="submit"
          className="hover:opacity-90 active:opacity-100"
        >
          Log in
        </Button>
        <div style={{ marginTop: 8 }}>
          or{" "}
          <a href="" onClick={handleRegisterClick}>
            Register here
          </a>
        </div>
      </Form.Item>
    </Form>
  );
};

export default LoginComponents;
