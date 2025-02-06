import React, { useState } from 'react';
import { Table, Button } from 'antd';

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
    <div style={{ margin: '80px auto' }}>
      {/* Section Hello World et Bouton */}
      <div style={{
        textAlign: "center", background: "lightyellow", padding: 10,
        border: "1px solid lightgray", display: "flex",
        flexDirection: "column", justifyContent: "center",
        alignItems: "center", height: "20vh"
      }}>
        <p>Hello World</p>
        <button
          onClick={() => window.location.href = 'https://bount-dev.com'}
          style={{
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "14px",
            marginTop: "1px",
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
          scroll={{ x: "100%" }}
        />
      </div>
    </div>
  );
}

export default Content;
