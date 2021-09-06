import '../styles/login.css'
import { BiLogInCircle } from "react-icons/bi";

export default function Login({ setUserInfo }){

    const login = async (e) => {
        e.preventDefault();

        
        const result = await fetch(
            '/api/Values/getCredentials',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify({ Email: e.target.email.value, Password: e.target.password.value })
            }
        )
        
        console.log(result)

        // setUserInfo("userInfoTest")
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', paddingTop: '25%', flex: 1, alignItems: 'center'}} >
            <form className="login-form" onSubmit={login}>
                <input type="text" name={"email"} placeholder="بريدك الإلكتروني" />
                <br /> 
                <input type="password" name={"password"} placeholder="كلمة المرور" />
                <br />  <br /> 
                <button type='submit'>
                    <BiLogInCircle color={"white"} size={22} />
                    دخول
                    <BiLogInCircle color={"rgba(0, 0, 0, 0)"} size={22} />
                </button>
            </form>
        </div>
    );
}