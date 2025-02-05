import React from 'react';
import './App.css';
import { Menu } from 'antd';
import { Route, Routes, useNavigate } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, height: '100vh' }}>
      <Header />
      <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
        <SideMenu />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div style={{
      height: 60, background: "lightskyblue",
      color: "white", display: 'flex',
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "bold"
    }}>Header</div>
  );
}

function Footer() {
  return (
    <div style={{
      height: 60, background: "lightgray",
      color: "white", display: 'flex',
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "bold"
    }}>Footer</div>
  );
}

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

function Content() {
  return (
    <div style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Routes>
        <Route path="/"></Route>
      </Routes>
      <div style={{
        textAlign: "center",
        padding: 20,
        background: "lightyellow",
        border: "1px solid lightgray"
      }}>
         <p>Hello World</p>
         
        <button 
          onClick={() => window.location.href = 'https://bount-dev.com'}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "14px",
            marginTop: "10px",
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          Visiter Bount Dev
        </button>
      </div>
    </div>
  );
}

export default App;
