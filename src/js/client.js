import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

//
// class Layout extends React.Component {
//   constructor(){
//     super();
//     this.name = "Will";
//   }
// getVal(x){
// return x/2;
// }
//
//   render(){
//
//     return (
// <h1> hey its {this.name}  </h1>
//   ); // return
// } // render
// }//Component

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
