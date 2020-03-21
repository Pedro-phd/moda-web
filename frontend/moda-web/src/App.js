import React from 'react';
import './App.css'



import imglogo from './assets/imglogo.svg'
import lupa from './assets/lupa.svg'
import logo from './assets/logo.svg'

function App() {
  return (
    <div class="container">
      <img id="logo" src={logo} alt="logo"/>
      <div id="imglogo"><img src={imglogo} alt="img logo"/></div>
      <div id="input">
        <div id="inputarea">
          <input placeholder="C A T E G O R I A  . . . "></input>
          <button onClick={()=>{alert('funcionou')}}><img src={lupa} alt="lupa"/></button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
