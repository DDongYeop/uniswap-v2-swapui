import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/Swap.css'
import './css/Select.css'
import { log } from 'console';

let isSwap = true;

function App() {
  return (
    <div className="App">
      <SwapPanel/>
      <SelectPanel/>
    </div>
  );
}

function SwapPanel() {
  if (!isSwap)
    return null;

  return (
    <div className='Swap'>
        <div className='SwapContainerBackPanel'>
          <div className='TopPanel'>
            <h5 className='TopText'>스왑</h5>
            <button className='TopButton'/>
          </div>
          <CoinCount/>
          <p className='Arrow'>↓</p>
          <CoinCount/>
          <button className='SwapButton'>스왑</button>
        </div>
      </div>
  )
}

function SelectPanel() {

  if (isSwap)
    return null;
  
  return (
    <div className='Select'>
        <div className='SelectContainerBackPanel'>
          <div className='TopPanel'>
            <p className='TopText'>토큰 검색</p>
            <button className='TopButton'/>
          </div>
          <input className='TextInput'></input>
          <div className='RecentList'></div>
          <div className='TokenScrollView'>
            <Coin/>
            <Coin/>
            <Coin/>
            <Coin/>
            <Coin/>
          </div>
          <button className='TokenListManagement'>토큰 목록 관리</button>
        </div>
      </div>
  )
}

function CoinCount() {
  return (
    <div className='InputPanel'> 
      <div className='Input'>``
        <input className='TextInput'></input>
        <button className='CoinChange' onClick={PanelChange}>ETH</button>
      </div>
      <p className='USDText'>$0.0</p>
    </div>
  )
}

function Coin() {
  return (
    <button className='CoinButton'>
      <div className='CoinImage'/>
      <div className='CoinNameArea'>
        <p className='CoinName'>ETH</p>
        <p className='CoinFullName'>Ether</p>
      </div>
    </button>
  )
}

function PanelChange() {
  isSwap = !isSwap;
  console.log(isSwap);
}

export default App;
