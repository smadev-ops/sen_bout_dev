import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SideMenu from './Components/SideMenu';
import Content from './Components/Content';

function App() {
  return (
    <div style={{ display: 1, flexDirection: "column", flex: 1, height: '100vh' }}>
      <Header />
      <div className="main-content" style={{ display: "flex", flexDirection: "row", flex: 1 }}>
        <SideMenu />
        <Content />
      </div>
      <Footer />
    </div>
  );
}




export default App;
