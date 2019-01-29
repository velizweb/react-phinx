import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Layout, Menu, Icon, Avatar } from "antd";

const { Sider } = Layout;

const Sidebar = props => {
  const { auth } = props;

  if (auth) {
    return (
      <Sider trigger={null}>
        <div className="logo" />
        <div>
          <Avatar size={56}>USER</Avatar>
          <div>Usuario</div>
        </div>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1">
            <Icon type="logout" />
            <span>
              <Link to="/signOut">Cerrar sessión</Link>
            </span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  } else {
    return "";
  }
};

const mapStateToProps = state => {
  return {
    auth: state.auth.auth
  };
};
export default connect(mapStateToProps)(Sidebar);
