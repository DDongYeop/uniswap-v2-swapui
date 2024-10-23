import { log } from 'console';
import './App.css';
import './css/Select.css'
import './App.tsx'
import coinList from './Data'
import React, { useState } from 'react';
import CloseIcon from './Image/close.png'
import axios from 'axios'

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

const Modal: React.FC<ModalProps> = ({isOpen, setOpen, getContainer, setFirstCoin, setSecondCoin, searchCoin, setSearchCoin, setFirstCoinPrice, setSecondCoinPrice}) => {
  if (isOpen)
    return null;

  const filteredData = coinList.filter((item) => item.id.toLowerCase().includes(searchCoin.toLowerCase()) || item.name.toLowerCase().includes(searchCoin.toLowerCase()));
  const coinData: JSX.Element[] = filteredData.map((data) => <Coin index={data.index} setOpen={setOpen} getContainer={getContainer} setFirstCoin={setFirstCoin} setSecondCoin={setSecondCoin} setCoinPrice={getContainer == 0 ? setFirstCoinPrice : setSecondCoinPrice}/>);

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

function Coin({index, setOpen, getContainer, setFirstCoin, setSecondCoin, setCoinPrice} : {index: number, setOpen: React.Dispatch<React.SetStateAction<boolean>>, getContainer: number, setFirstCoin: React.Dispatch<React.SetStateAction<number>>, setSecondCoin: React.Dispatch<React.SetStateAction<number>>, setCoinPrice: React.Dispatch<React.SetStateAction<number>>}) {
  return (
    <button className='CoinButton' onClick={() => {
      setOpen(true);
      getContainer == 0 ? setFirstCoin(index) : setSecondCoin(index);
      SetCoinPrice(index, setCoinPrice);
    }}>
      <div className='CoinImage'/>
      <div className='CoinNameArea'>
        <p className='CoinName'>{coinList[index].name}</p>
        <p className='CoinFullName'>{coinList[index].id}</p>
      </div>
    </button>
  )
}

function SetCoinPrice(idx: number, setCoinPrice: React.Dispatch<React.SetStateAction<number>>) {
  axios.get(`https://api.coingecko.com/api/v3/simple/price?vs_currencies=USD&ids=${coinList[idx].id}`)
    .then(res => {
      setCoinPrice(+res.data[coinList[idx].id]['usd']);
      console.log(+res.data[coinList[idx].id]['usd']);
    });
}


export default Modal;
