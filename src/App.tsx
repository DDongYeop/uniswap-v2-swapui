import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/Swap.css'
import './css/Select.css'

function App() {
  return (
    <div className="App">
      <div className='Swap'>
        <div className='SwapContainerBackPanel'>
          <div className='SwapTopPanel'>
            <h5 className='SwapText'>스왑</h5>
            <button className='SettingButton'/>
          </div>
          <CoinCount/>
          <p className='Arrow'>↓</p>
          <CoinCount/>
          <button className='SwapButton'>스왑</button>
        </div>
      </div>
      <div className='Select'>
        <div className='SelectContainerBackPanel'>
          
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
