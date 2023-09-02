import { LOGO } from "../../Utills/Constants";

let GetHeader=()=>{
    return (
          <div className="header-container">
          <div className="logo">
            <img src={LOGO} alt="BigCo Inc. logo"/>
          </div>
          <div className="nav-item">
            <ul className="nav nav-tem">
                <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled" href="#">Cart</a>
                </li>
                </ul>
                </div>
          </div>
        );
    }

    export default GetHeader;