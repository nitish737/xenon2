import React, { useState } from "react";
import './navbar.scss' ;

import {Link} from 'react-router-dom'

const Navbar = () => {

    const menu = [
        {
            key : 1 ,
            title : "home",
            url : "/"
        },
        {
            key : 2,
            title : "contact",
            url : "contact"
        },
        {
            key : 3 ,
            title : "Register", 
            url : "register"

        },
        {
            key : 3,
            title : "Login",
            url : "login"

        }
    ]

    const [navActive, setNavActive] = useState(false) ;

    const toggleNav = () => {
        setNavActive(!navActive)
    }

    const [left, setLeft] = useState(0) ;

    let act = false ;

    const [num, setNum] = useState(0) ;

    const changeNum = () => {
        setNum(num + 1) ;
    }

    return(
        <div>
            <nav>
                <div className="left" >
                    <h1>
                        logo
                    </h1>
                </div>
                <div className="mid" ></div>
                <div onClick={toggleNav}>hello</div>
                <div className= "right ">
                    <ul className={navActive ? "active" : ""}>
                        {menu.map((item, index)=>{
                            return(
                                <li >
                                    <Link to={item.url}>
                                        {item.title}
                                    </Link>
                                </li>

                                
                            )
                        })}
                    </ul>
                </div>
            </nav>
            <h1 onClick={changeNum}>
                {num}
            </h1>
        </div>

    )
}




export default Navbar ;

























