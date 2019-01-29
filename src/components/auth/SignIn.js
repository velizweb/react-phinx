import React from "react";
//import { connect } from "react-redux";
import { Row, Col, Button, Form, Input, Icon, Layout } from "antd";

const { Content } = Layout;

class SignIn extends React.Component {
  handlesOnLogin = event => {
    event.preventDefault();

    const {
      form: { validateFields, getFieldValue },
      history,
      signIn
    } = this.props;

    let isValidForm = true;
    validateFields((err /* , values */) => {
      if (err) {
        isValidForm = false;
      }
    });

    if (!isValidForm) {
      return false;
    }

    const credential = {
      user: getFieldValue("user"),
      password: getFieldValue("password")
    };

    signIn(credential);

    history.push({ pathname: "/dashboard" });
  };

  render() {
    const {
      form: { getFieldDecorator }
    } = this.props;

    return (
      <Layout style={{ height: "100vh" }}>
        <Content style={{ margin: "65px auto" }}>
          <div
            style={{
              padding: 24,
              background: "#fff",
              minHeight: 360,
              width: 500
            }}
          >
            <Row className="login-form">
              <Col md={{ span: 6, offset: 9 }} xs={{ span: 18, offset: 3 }}>
                <div style={{ textAlign: "center" }}>
                  <Icon type="user" style={{ fontSize: "124px" }} />
                </div>
              </Col>
            </Row>
            <Row className="login-form">
              <Col md={{ span: 12, offset: 6 }} xs={{ span: 18, offset: 3 }}>
                <Form onSubmit={this.handlesOnLogin} className="login-form">
                  <Form.Item>
                    {getFieldDecorator("user", {
                      rules: [
                        {
                          required: true,
                          message: "Por favor ingrese el usuario!"
                        }
                      ]
                    })(
                      <Input
                        prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                        placeholder="Usuario"
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator("password", {
                      rules: [
                        {
                          required: true,
                          message: "Por favor ingrese el password!"
                        }
                      ]
                    })(
                      <Input
                        prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                        type="password"
                        placeholder="Password"
                      />
                    )}
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      <Icon type="login" />
                      Log in
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default Form.create({})(SignIn);
