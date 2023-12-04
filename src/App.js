// import logo from './logo.svg';
import './App.css';
import Youtube from './components/youtube/Youtube';
import Videos from './components/Videos';
import SideBar from './components/SideBar';

function App() {
  const Marstyle = {
    margin: "-17px",

  }

  return (
    <>
  <Youtube></Youtube> 
  <SideBar></SideBar>
    <div style={Marstyle}>
  <Videos></Videos>
   </div>
  
  
  
  

  
  </>
  );
}

export default App;
