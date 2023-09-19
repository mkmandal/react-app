import { useState } from "react";
import { LOGO } from "../../Utills/Constants";
import { Link } from "react-router-dom";

let GetHeader=()=>{

  const [loginBtnReact,setloginBtnReact]=useState("login");
    return (
          <div className="header-container">
          <div className="logo">
            <img src={LOGO} alt="BigCo Inc. logo"/>
          </div>
          <div className="nav-item">
            <ul className="nav nav-tem">
                <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="contact">Contact</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled" href="#">Cart</a>
                </li>
                <li className="nav-item">
                <button className="login" onClick={()=>{
                    loginBtnReact==="login"?setloginBtnReact("logout"):setloginBtnReact("login");
                }}>{loginBtnReact}</button>
                </li>
                </ul>
                </div>
          </div>
        );
    }

    export default GetHeader;