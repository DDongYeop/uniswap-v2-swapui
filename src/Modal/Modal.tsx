import '../App.css';
import '../css/Modal.css'
import '../App'
import coinList from '../Other/Data'
import React, { useState } from 'react';
import CloseIcon from '../Image/close.png'
import Coin from './Coin';

interface ModalProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  getContainer: number;
  setFirstCoin: React.Dispatch<React.SetStateAction<number>>;
  setSecondCoin: React.Dispatch<React.SetStateAction<number>>;
  searchCoin: string;
  setSearchCoin: React.Dispatch<React.SetStateAction<string>>;
  setFirstCoinPrice: React.Dispatch<React.SetStateAction<number>>;
  setSecondCoinPrice: React.Dispatch<React.SetStateAction<number>>;
}


export default function Modal({isOpen, setOpen, getContainer, setFirstCoin, setSecondCoin, searchCoin, setSearchCoin, setFirstCoinPrice, setSecondCoinPrice} : ModalProps) {
  if (isOpen)
    return null;

  const filteredData = coinList.filter((item) => item.id.toLowerCase().includes(searchCoin.toLowerCase()) || item.name.toLowerCase().includes(searchCoin.toLowerCase()));
  const coinData: JSX.Element[] = filteredData.map((data) => <Coin index={data.index} setOpen={setOpen} getContainer={getContainer} setFirstCoin={setFirstCoin} setSecondCoin={setSecondCoin} setCoinPrice={getContainer == 0 ? setFirstCoinPrice : setSecondCoinPrice}/>);

  return (
    <div className='BackPanel'>
      <div className={`Modal`}>
        <div className='ModalContainerBackPanel'>
          <div className='TopPanel'>
            <p className='TopText'>토큰 검색</p>
            <img className='TopButton' src={CloseIcon} onClick={() => {
              setOpen(true);
            }}/>
          </div>
          <input className='TextInput' onInput={(input) => {
            setSearchCoin(input.currentTarget.value);
          }}></input>
          <div className='RecentList'></div>
            <div className='TokenScrollView'>
              {coinData}
            </div>
          <button className='TokenListManagement'>토큰 목록 관리</button>
        </div>
      </div>
    </div>
    
  )
}
