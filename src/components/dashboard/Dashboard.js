import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "../layout/Sidebar";
import CarList from "../cars/CarList";
import { Layout } from "antd";

const { Content } = Layout;

class Dashboard extends Component {
  componentDidMount() {
    console.log("El componente está disponible en el DOM");
    const { auth, history } = this.props;
    if (!auth.auth) {
      history.push({ pathname: "/" });
    }
  }

  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Sidebar />
        <Content style={{ margin: "24px 16px 0" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 560 }}>
            <CarList />
          </div>
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Dashboard);
