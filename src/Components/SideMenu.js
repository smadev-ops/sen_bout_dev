import React from 'react';
import { Menu } from 'antd';
import { useNavigate } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

function SideMenu() {
  const navigate = useNavigate();

  return (
    <Menu
      defaultSelectedKeys={[window.location.pathname]}
      onClick={({ key }) => navigate(key)}
      items={[
        { label: "Accueil", key: "/", icon: <HomeOutlined /> },
      ]}
    />
  );
}

export default SideMenu;
