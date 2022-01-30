import React from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { Footer } from "../../components";
import LogImg from "../../assets/log.svg";
import styles from "./Login.module.css";

interface loginPropsType {}
interface loginStateType {}

export const Login: React.FC<loginPropsType> = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.login}>
      {/* 头部 */}
      <div className={styles.loginHeader}></div>
      <div className={styles.loginContainer}>
        {/* 标题 */}
        <div className={styles.loginTitle}>
          <img className={styles.logImg} src={LogImg} alt="" />
          <span>后台管理系统登录</span>
        </div>

        {/* 登录表单 */}
        <Row justify="center" align="middle">
          <Col span={6}>
            <Form
              name="basic"
              wrapperCol={{ span: 24 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
      {/* 尾部 */}
      <Footer></Footer>
    </div>
  );
};
