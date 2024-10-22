import { log } from 'console';
import './App.css';
import './css/Select.css'
import './App.tsx'
import coinList from './Data'
import React, { useState } from 'react';
import CloseIcon from './Image/close.png'

interface ModalProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  getContainer: number;
  setFirstCoin: React.Dispatch<React.SetStateAction<number>>;
  setSecondCoin: React.Dispatch<React.SetStateAction<number>>;
}

const Modal: React.FC<ModalProps> = ({isOpen, setOpen, getContainer, setFirstCoin, setSecondCoin}) => {
  if (isOpen)
    return null;
  
  return (
    <div className='BackPanel'>
      <div className={`Select`}>
        <div className='SelectContainerBackPanel'>
          <div className='TopPanel'>
            <p className='TopText'>토큰 검색</p>
            <img className='TopButton' src={CloseIcon} onClick={() => {
              setOpen(true);
            }}/>
          </div>
          <input className='TextInput'></input>
          <div className='RecentList'></div>
          <div className='TokenScrollView'>
            <Coin index={0} setOpen={setOpen} getContainer={getContainer} setFirstCoin={setFirstCoin} setSecondCoin={setSecondCoin}/>
            <Coin index={1} setOpen={setOpen} getContainer={getContainer} setFirstCoin={setFirstCoin} setSecondCoin={setSecondCoin}/>
            <Coin index={2} setOpen={setOpen} getContainer={getContainer} setFirstCoin={setFirstCoin} setSecondCoin={setSecondCoin}/>
            <Coin index={3} setOpen={setOpen} getContainer={getContainer} setFirstCoin={setFirstCoin} setSecondCoin={setSecondCoin}/>
            <Coin index={4} setOpen={setOpen} getContainer={getContainer} setFirstCoin={setFirstCoin} setSecondCoin={setSecondCoin}/>
            <Coin index={5} setOpen={setOpen} getContainer={getContainer} setFirstCoin={setFirstCoin} setSecondCoin={setSecondCoin}/>
            <Coin index={6} setOpen={setOpen} getContainer={getContainer} setFirstCoin={setFirstCoin} setSecondCoin={setSecondCoin}/>
            <Coin index={7} setOpen={setOpen} getContainer={getContainer} setFirstCoin={setFirstCoin} setSecondCoin={setSecondCoin}/>
            <Coin index={8} setOpen={setOpen} getContainer={getContainer} setFirstCoin={setFirstCoin} setSecondCoin={setSecondCoin}/>
            <Coin index={9} setOpen={setOpen} getContainer={getContainer} setFirstCoin={setFirstCoin} setSecondCoin={setSecondCoin}/>
          </div>
          <button className='TokenListManagement'>토큰 목록 관리</button>
        </div>
      </div>
    </div>
    
  )
 }

//function Coin({index, getContainer, setFirstCoin, setSecondCoin} : {index: number, getContainer: number, setFirstCoin: React.Dispatch<React.SetStateAction<number>>, setSecondCoin: React.Dispatch<React.SetStateAction<number>>}) {
function Coin({index, setOpen, getContainer, setFirstCoin, setSecondCoin} : {index: number, setOpen: React.Dispatch<React.SetStateAction<boolean>>, getContainer: number, setFirstCoin: React.Dispatch<React.SetStateAction<number>>, setSecondCoin: React.Dispatch<React.SetStateAction<number>>}) {
  return (
    <button className='CoinButton' onClick={() => {
      setOpen(true);
      getContainer == 0 ? setFirstCoin(index) : setSecondCoin(index);
    }}>
      <div className='CoinImage'/>
      <div className='CoinNameArea'>
        <p className='CoinName'>{coinList[index].name}</p>
        <p className='CoinFullName'>{coinList[index].id}</p>
      </div>
    </button>
  )
}


export default Modal;