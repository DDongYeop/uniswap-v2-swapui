import React, { useRef, useState } from 'react';
import coinList from './Other/Data'
import axios from 'axios'
import Swap from './Swap/Swap'
import './css/Swap.css'
import './css/Modal.css'

//렌더링 되는 횟수
let renderCnt = 1;

function App() {
  const [getIsSwap, setIsSwap] = useState<boolean>(true);   
  const [getContainer, setContainer] = useState<number>(0);
  const [getFirstCoin, setFirstCoin] = useState<number>(3);
  const [getFirstCoinPrice, setFirstCoinPrice] = useState<number>(0);
  const [getSecondCoin, setSecondCoin] = useState<number>(2);
  const [getSecondCoinPrice, setSecondCoinPrice] = useState<number>(0);
  const [getSearchCoin, setSearchCoin] = useState<string>(''); //검색창 상태 관리
  const [getLastSelect, setLastSelect] = useState<number>(0);
  const [getCoinCount, setCoinCount] = useState<number[]>([0, 0]);
  const [getIsFirst, setIsFirst] = useState<boolean>(true);

  if (getIsFirst)
  {
    setIsFirst(false);
    SetCoinPrice(getFirstCoin, setFirstCoinPrice);
    SetCoinPrice(getSecondCoin, setSecondCoinPrice);
  }

  renderCnt++;
  if (renderCnt >= 3)
  {
    renderCnt = 0;
    CoinSetting(getLastSelect, setCoinCount, getCoinCount, getFirstCoinPrice, getSecondCoinPrice);
  }

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
      setLastSelect={setLastSelect}
    ></Swap>
  );
}

function SetCoinPrice(idx: number, setCoinPrice: React.Dispatch<React.SetStateAction<number>>) {
  axios.get(`https://api.coingecko.com/api/v3/simple/price?vs_currencies=USD&ids=${coinList[idx].id}`)
    .then(res => {
      setCoinPrice(+res.data[coinList[idx].id]['usd']);
    });
}

function CoinSetting(getLastSelect: number, setCoinCount: React.Dispatch<React.SetStateAction<number[]>>, getCoinCount:number[], getFirstCoinPrice:number, getSecondCoinPrice:number) {
  let coin = [...getCoinCount];
  coin[getLastSelect] = getCoinCount[getLastSelect];
  coin[getLastSelect].toFixed(10); 

  let idx = getLastSelect + 1;
  idx = idx == 2 ? 0 : 1;
  if (getLastSelect)
    coin[idx] = (coin[getLastSelect] * getSecondCoinPrice) / getFirstCoinPrice;
  else
    coin[idx] = (coin[getLastSelect] * getFirstCoinPrice) / getSecondCoinPrice;
  coin[idx].toFixed(10);

  setCoinCount(coin);
}

export default App;
