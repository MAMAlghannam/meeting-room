// import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Booking from './pages/Booking';
import { useState } from 'react';

function App() {

  const [userInfo, setUserInfo] = useState(null);

  return (
    <div style={{display: 'flex', flex: 1, flexDirection: 'column'}} dir="rtl" className="App">
      <header className="App-header" >
        <span>&nbsp;</span>
        <span style={{fontSize: 20}} >عنوان الصفحة</span>
        <span>&nbsp;</span>
      </header>
      <div style={{display: 'flex', flex: 10, backgroundColor: "lightgrey", overflowY: 'auto'}} >
      {  userInfo == null ?
        <Login setUserInfo={setUserInfo} />
        :
        <Booking />
      }
      </div>
    </div>
  );
}

export default App;
