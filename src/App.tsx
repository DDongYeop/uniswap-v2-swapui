import React, { useRef, useState } from 'react';
import coinList from './Other/Data'
import axios from 'axios'
import Swap from './Swap/Swap'
//import './App.css'
import './css/Swap.css'
import './css/Modal.css'

function App() {
  const [getIsSwap, setIsSwap] = useState<boolean>(true);
  const [getContainer, setContainer] = useState<number>(0);
  const [getFirstCoin, setFirstCoin] = useState<number>(3);
  const [getFirstCoinPrice, setFirstCoinPrice] = useState<number>(0);
  const [getSecondCoin, setSecondCoin] = useState<number>(2);
  const [getSecondCoinPrice, setSecondCoinPrice] = useState<number>(0);
  const [getSearchCoin, setSearchCoin] = useState<string>(''); //검색창 상태 관리
  const [getCoinCount, setCoinCount] = useState<number[]>([0, 0]);

  SetCoinPrice(getFirstCoin, setFirstCoinPrice);
  SetCoinPrice(getSecondCoin, setSecondCoinPrice);

  return (
    <Swap 
      getIsSwap={getIsSwap}
      setIsSwap={setIsSwap}
      getContainer={getContainer}
      setContainer={setContainer}
      getFirstCoin={getFirstCoin}
      setFirstCoin={setFirstCoin}
      getFirstCoinPrice={getFirstCoinPrice}
      setFirstCoinPrice={setFirstCoinPrice}
      getSecondCoin={getSecondCoin}
      setSecondCoin={setSecondCoin}
      getSecondCoinPrice={getSecondCoinPrice}
      setSecondCoinPrice={setSecondCoinPrice}
      getSearchCoin={getSearchCoin}
      setSearchCoin={setSearchCoin}
      getCoinCount={getCoinCount}
      setCoinCount={setCoinCount}
    ></Swap>
  );
}

function SetCoinPrice(idx: number, setCoinPrice: React.Dispatch<React.SetStateAction<number>>) {
  axios.get(`https://api.coingecko.com/api/v3/simple/price?vs_currencies=USD&ids=${coinList[idx].id}`)
    .then(res => {
      setCoinPrice(+res.data[coinList[idx].id]['usd']);
    });
}

export default App;
