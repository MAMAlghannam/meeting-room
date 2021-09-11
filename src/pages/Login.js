import { useState } from 'react';
import '../styles/login.css'
import { BiLogInCircle } from "react-icons/bi";
import { SpinningCircles } from 'svg-loaders-react'
import { postRequest } from '../actions/mainActions';

export default function Login({ setUserInfo, toast }){

    const [isLoading, setIsLoading] = useState(false)

    const login = async (e) => {
        e.preventDefault();

        try {
            setIsLoading(true)
            const result = await postRequest(
                '/api/Values/getCredentials', 
                { Email: e.target.email.value, Password: e.target.password.value }
            )
    
            setUserInfo(result)

        } catch (error) {
            console.log(error)
            setIsLoading(false)
            toast.error("بريدك أو كلمة المرور غير صحيحة", {  })
        }

    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', paddingTop: '25%', flex: 1, alignItems: 'center'}} >
            <form className="login-form" onSubmit={login}>
                <input type="text" name={"email"} placeholder="بريدك الإلكتروني" />
                <br /> 
                <input type="password" name={"password"} placeholder="كلمة المرور" />
                <br />  <br /> 

                <button type='submit'>
                {
                    isLoading 
                    ? <SpinningCircles fill={"white"} width={22} height={22} />
                    : <BiLogInCircle color={"white"} size={22} />
                }
                    دخول
                    <BiLogInCircle color={"rgba(0, 0, 0, 0)"} size={22} />
                </button>

            </form>
        </div>
    );
}