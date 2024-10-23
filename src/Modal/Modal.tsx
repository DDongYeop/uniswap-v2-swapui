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
  if (isOpen) // 열림 상태에만 실행 되도록. 
    return null;

  const filteredData = coinList.filter((item) => item.id.toLowerCase().includes(searchCoin.toLowerCase()) || item.name.toLowerCase().includes(searchCoin.toLowerCase())); // 검색한 것에 맞게 넣어주고, 
  const coinData: JSX.Element[] = filteredData.map((data) => <Coin  index={data.index} setOpen={setOpen} getContainer={getContainer} setFirstCoin={setFirstCoin} 
                                                                    setSecondCoin={setSecondCoin} setCoinPrice={getContainer == 0 ? setFirstCoinPrice : setSecondCoinPrice}/>); // map 형태로 변환해서 검색한 결과물만 보이도록

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
              {coinData}  { /* 검색한거 실직적인 적용 */ }
            </div>
          <button className='TokenListManagement' onClick={() => {
              window.confirm("준비 중입니다."); // 준비중 alert
          }}>토큰 목록 관리</button>
        </div>
      </div>
    </div>
    
  )
}
