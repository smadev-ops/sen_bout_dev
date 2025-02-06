import React, { useState } from 'react';
import './App.css';
import { Menu, Table, Button } from 'antd';
import {  useNavigate } from "react-router-dom";
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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://donnees-back-bount-dev.onrender.com/paricipants/");
      if (!response.ok) throw new Error('Erreur de chargement des données');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Nom complet', dataIndex: 'full_name', key: 'full_name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Contact', dataIndex: 'contact', key: 'contact' },
    { title: 'Adresse', dataIndex: 'address', key: 'address' },
  ];

  return (
    <div style={{
    margin: '80px auto', }}>
      {/* Section Hello World et Bouton */}
      <div style={{ textAlign: "center", background: "lightyellow", padding: 20, border: "1px solid lightgray" ,
      display: "flex", flexDirection: "column",justifyContent: "center",
      alignItems: "center", 
      height: "20vh",
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

      {/* Tableau des participants */}
      <div style={{ marginTop: 40 }}>
        <h2 style={{ textAlign: "center" }}>Liste des participants</h2>
        <Button
          type="primary"
          onClick={fetchData}
          loading={loading}
          style={{ marginBottom: 20 }}
        >
          Charger les participants
        </Button>
        <Table
          dataSource={data}
          columns={columns}
          rowKey="id"
          bordered
        />
      </div>
    </div>
  );
}

export default App;
