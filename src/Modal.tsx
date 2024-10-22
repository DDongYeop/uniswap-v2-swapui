import { log } from 'console';
import './App.css';
import './css/Select.css'
import './App.tsx'
import App from './App';
import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({isOpen, setOpen}) => {
  if (isOpen)
    return null;

  return (
    <div className='BackPanel'>
      <div className={`Select`}>
        <div className='SelectContainerBackPanel'>
          <div className='TopPanel'>
            <p className='TopText'>토큰 검색</p>
            <button className='TopButton' onClick={() => {
              setOpen(true);
            }}/>
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


export default Modal;