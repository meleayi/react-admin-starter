import React from "react";
import { Button, Form, Input, Select } from "antd";

const RegisterComponents = ({ setActiveTab }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  // Phone number validation
  const validatePhone = (_, value) => {
    const ethiopianPhoneRegex = /^(09\d{8}|07\d{8}|\+2519\d{8}|\+2517\d{8})$/;
    if (!value) {
      return Promise.reject(new Error("Please input your phone number!"));
    }
    if (!ethiopianPhoneRegex.test(value)) {
      return Promise.reject(
        new Error(
          "Phone must be 09xxxxxxxx, 07xxxxxxxx, +2519xxxxxxxx, or +2517xxxxxxxx!"
        )
      );
    }
    return Promise.resolve();
  };
  const handleLoginClick = (e) => {
    e.preventDefault();
    setActiveTab("login");
  };
  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      layout="vertical"
      size="middle"
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          { type: "email", message: "Invalid email format" },
          { required: true, message: "Please input your email" },
        ]}
        style={{ marginBottom: 12 }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ validator: validatePhone }]}
        style={{ marginBottom: 12 }}
      >
        <Input placeholder="09xxxxxxxx or +2519xxxxxxxx" />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: "Please select your gender" }]}
        style={{ marginBottom: 12 }}
      >
        <Select>
          <Select.Option value="male">Male</Select.Option>
          <Select.Option value="female">Female</Select.Option>
          <Select.Option value="other">Other</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: "Please input your password" }]}
        style={{ marginBottom: 12 }}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirmPassword"
        label="Confirm Password"
        dependencies={["password"]}
        rules={[
          { required: true, message: "Please confirm your password" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject("Passwords do not match!");
            },
          }),
        ]}
        style={{ marginBottom: 12 }}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item style={{ textAlign: "center" }}>
        <Button type="primary" htmlType="submit" block>
          Register
        </Button>
        <div style={{ marginTop: 8 }}>
          or{" "}
          <a href="" onClick={handleLoginClick}>
            Login
          </a>
        </div>
      </Form.Item>
    </Form>
  );
};

export default RegisterComponents;
