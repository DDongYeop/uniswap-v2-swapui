import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/Swap.css'
import './css/Select.css'
import Modal from './Modal';

function App() {
  const [isSwap, setSwap] = useState<boolean>(true);

  return (
    <div className="App">
      <div className={`Swap`}>
        <div className='SwapContainerBackPanel'>
          <div className='TopPanel'>
            <h5 className='TopText'>스왑</h5>
            <button className='TopButton' onClick={() => {
              window.confirm("준비 중입니다.");
            }}/>
          </div>
          <CoinCount/>
          <p className='Arrow'>↓</p>
          <CoinCount/>
          <button className='SwapButton' onClick={() => {
              window.confirm("준비 중입니다.");
            }}>스왑</button>
        </div>
      </div>
      <Modal
        isOpen={isSwap}
        setOpen={setSwap}
      />
    </div>
  );

  function CoinCount() {
    return (
      <div className='InputPanel'> 
        <div className='Input'>``
          <input className='TextInput'></input>
          <button className='CoinChange' onClick={() => {
            setSwap(false);
          }}>ETH</button>
        </div>
        <p className='USDText'>$0.0</p>
      </div>
    )
  }

  function SwapPanelShow() {
    setSwap(true);
  }
}

export default App;
