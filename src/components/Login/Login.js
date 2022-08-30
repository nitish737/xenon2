import React from "react";
import "./login.scss" ;



const Login = () => {
    return(
        <>

        <div className="login">
            <h1>
                Login
            </h1>
            <div className="con">
                <span>
                    userName
                </span>
                <input type="text" name="" id="" placeholder="..."/>
               
                <span>
                    Password
                </span>
                <input type="password" placeholder="..."/>
                <button>
                    Login
                </button>
                <button class = "register">
                    New User ? Rgister here
                </button>
            </div>
        </div>
        </>
    )
}

export default Login ;