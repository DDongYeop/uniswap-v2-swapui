import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Container'>
        <div className='ContainerBackPanel'>
          <div className='TopPanel'>
            <h5 className='SwapText'>스왑</h5>
            <button className='SettingButton'/>
          </div>
          <CoinCount/>
          <p className='Arrow'>↓</p>
          <CoinCount/>
          <button className='SwapButton'>스왑</button>
        </div>
      </div>
    </div>
  );
}

function CoinCount() {
  return (
    <div className='InputPanel'> 
      <div className='Input'>
        <input className='CountInput'></input>
        <button className='CoinChange'>ETH</button>
      </div>
      <p className='USDText'>$0.0</p>
    </div>
  )
}

export default App;
