import '../styles/login.css'
import { BiLogInCircle } from "react-icons/bi";

export default function Login({ setUserInfo }){
    return (
        <div style={{display: 'flex', flexDirection: 'column', paddingTop: '25%', flex: 1, alignItems: 'center'}} >
            <form className="login-form" >
                <input type="text" placeholder="أدخل بريدك الإلكتروني" />
                <button type='submit' onClick={() => setUserInfo("userInfoTest")}>
                    <BiLogInCircle color={"white"} size={22} />
                    دخول
                    <BiLogInCircle color={"rgba(0, 0, 0, 0)"} size={22} />
                </button>
            </form>
        </div>
    );
}