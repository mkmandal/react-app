import React from "react";
import ReactDOM from "react-dom/client";
import "../style.css";
import GetHeader from "./components/Header";
import Body from "./components/Body";

let demo1 = React.createElement("h1", { style: { color: "green" }}, "Welcome to Namaste React !!")
let demo = React.createElement("h1", { style: { color: "green" }}, demo1)

 // JSX= babel transpile it into react.createElement =>reactElement=> JS Object => html element(render)
let HeadingJSX = function() { return  <h1 id="heading">React using headingJSX</h1>}
/**
 * Header 
 *  logo
 *  navItem
 * Body
 *  search
 *  Resto card
 *  Restarent container
 *    img
 *    name of restro,cusines,start rating, delivery time. 
  * footer
 *  copywrite
 *  link
 *  address
 *  Contact
 *
 * 
 * 
 * 
 * 
 * 
*/


//component 

//1. classbased component(old practice)
//2. functional compoent(new way)

//react funtional compnent is just js functions which return some jsx.


let AppLayout = () =>(
 <div className="container"> 
        <GetHeader/>
        <Body/>
        </div>
)

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);  