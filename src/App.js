// App.js
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SideMenu from './Components/SideMenu';
import Content from './Components/Content';

function App() {
  return (
    <div className='container'>
    <div className="main-content" style={{ display: "flex", flexDirection: "column", flex: 1, height: '10vh' }}>
      <Header />
      <div className="main-content" style={{ display: "flex", flexDirection: "row" }}>
        <SideMenu />
        <Content />
      </div>
      <Footer />
    </div>
  </div>
  );
}




export default App;
