// import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Booking from './pages/Booking';
import { useState } from 'react';
import { RiLogoutCircleLine, RiFileListLine } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { MdCancel } from "react-icons/md" 
import ListOfBookings from './components/ListOfBookings';

function App() {

  const [userInfo, setUserInfo] = useState(null);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const closeBtn = <button className="close none-btn" onClick={toggle}> <MdCancel color={"#9E772B"} size={25}/> </button>;

  return (
    <div style={{display: 'flex', flex: 1, flexDirection: 'column'}} dir="rtl" className="App">
      <header className="App-header" >
      {
        userInfo 
        ? 
        <div style={{width: '100%', flex: 1, display: 'flex', alignItems: 'center'}} >
          <p style={{margin: 0, paddingRight: 20, flex: 2}} >
            مرحبًا، 
            {" " + userInfo.email}
            .
          </p>
          <span style={{flex: 1, display: 'flex', justifyContent: 'space-evenly'}} >
            <button className="none-btn" onClick={toggle} >
              <RiFileListLine color={"white"} size={25}/>
            </button>
            <button className="none-btn" onClick={() => setUserInfo(null)} >
              <RiLogoutCircleLine color={"white"} size={25}/>
            </button>
          </span>
        </div> 
        : <span style={{fontSize: 20, alignSelf: 'center'}} >تسجيل دخول</span>
        
      }
      </header>
      <div style={{display: 'flex', flex: 10, backgroundColor: "#E4E4E4", overflowY: 'auto'}} >
      {  userInfo == null ?
        <Login toast={toast} setUserInfo={setUserInfo} />
        :
        <Booking userInfo={userInfo} toast={toast} />
      }
      </div>
      <ToastContainer
        className={'toatStyle'} theme={"colored"} hideProgressBar={true} position={toast.POSITION.BOTTOM_CENTER}
      />
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle} close={closeBtn} > حجوزاتك السابقة </ModalHeader>
        <ModalBody>
          <ListOfBookings userInfo={userInfo} />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default App;
