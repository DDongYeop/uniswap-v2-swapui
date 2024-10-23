import '../App.css';
import '../css/Modal.css'
import '../App'
import coinList from '../Other/Data'
import React, { useState } from 'react';
import axios from 'axios'

interface CoinProps {
  index: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  getContainer: number;
  setFirstCoin: React.Dispatch<React.SetStateAction<number>>;
  setSecondCoin: React.Dispatch<React.SetStateAction<number>>;
  setCoinPrice: React.Dispatch<React.SetStateAction<number>>
}

export default function Coin({index, setOpen, getContainer, setFirstCoin, setSecondCoin, setCoinPrice} : CoinProps ) {
    return (
        <button className='CoinButton' onClick={() => {
                setOpen(true);
                getContainer == 0 ? setFirstCoin(index) : setSecondCoin(index);
                SetCoinPrice(index, setCoinPrice);
            }}>
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
