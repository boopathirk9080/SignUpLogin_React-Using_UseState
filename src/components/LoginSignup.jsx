import { useState } from 'react'
import UserI from '../assets/icons/icons8-customer-100.png'
import EmailI from '../assets/icons/icons8-email-100.png'
import PasswordI from '../assets/icons/icons8-password-100.png'
import './LoginSignup.css'

const LoginSignup = () => {
    // const action="Sign Up"
    // const action="Login"

    const [action, setAction] = useState("Sign Up")
    function signup() {
        setAction("Sign Up")
    }
    function login() {
        setAction("Login")
    }

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            {/* <div className="input"></div> */}

            {action == "Login" ? <div></div> :
                <div className="input">
                    <img src={UserI} alt="" />
                    <input type="text" placeholder='Username' name="" id="" />
                </div>}
            <div className="input">
                <img src={EmailI} alt="" />
                <input type="email" placeholder='Email' name="" id="" />
            </div>
            <div className="input">
                <img src={PasswordI} alt="" />
                <input type="password" placeholder='Password' name="" id="" />
            </div>
            {action === "Sign Up" ? <div></div> :
                <div className="forget-password">Lost Password <span>Click Here!</span> </div>
            }
            <div className="submit-container">
                <div onClick={() => signup()} className={action === "Login" ? "submit grey" : "submit"}>Sign Up</div>
                <div onClick={() => login()} className={action === "Sign Up" ? "submit grey" : "submit"}>Login</div>
            </div>
        </div>

    )
}

export default LoginSignup