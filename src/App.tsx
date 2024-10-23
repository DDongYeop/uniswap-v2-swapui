import React, { useRef, useState } from 'react';
import coinList from './Other/Data'
import axios from 'axios'
import Swap from './Swap/Swap'
import './css/Swap.css'
import './css/Modal.css'

//렌더링 되는 횟수
let renderCnt = 1;

function App() {
  const [getIsSwap, setIsSwap] = useState<boolean>(true);  // 스왑판넬 켜지는거 관련

  const [getContainer, setContainer] = useState<number>(0); // 변경될 코인의 번호
  const [getFirstCoin, setFirstCoin] = useState<number>(3); // 첫 번째 코인의 번호
  const [getFirstCoinPrice, setFirstCoinPrice] = useState<number>(0); // 첫 번째 코인의 가격
  const [getSecondCoin, setSecondCoin] = useState<number>(2); // 두 번째 코인의 번호
  const [getSecondCoinPrice, setSecondCoinPrice] = useState<number>(0); // 두 번째 코인의 번호

  const [getSearchCoin, setSearchCoin] = useState<string>(''); // 검색창 상태 관리
  const [getLastSelect, setLastSelect] = useState<number>(0); // 마지막으로 선택한 UI 
  const [getCoinCount, setCoinCount] = useState<number[]>([0, 0]); // 가격의 따른 코인의 개수
  const [getIsFirst, setIsFirst] = useState<boolean>(true); // 처음 시작했을 때

  if (getIsFirst) //처음 시작하면 
  {
    setIsFirst(false);
    SetCoinPrice(getFirstCoin, setFirstCoinPrice);    // 첫 번째 코인 가격 가져오기
    SetCoinPrice(getSecondCoin, setSecondCoinPrice);  // 두 번째 코인 가격 가져오기
  }

  // 과도한 리렌더링 방지용. 
  renderCnt++;
  if (renderCnt >= 3)
  {
    renderCnt = 0;
    CoinSetting(getLastSelect, setCoinCount, getCoinCount, getFirstCoinPrice, getSecondCoinPrice);  // 코인 가격 설정. 
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

// coingecko API 가져오기
function SetCoinPrice(idx: number, setCoinPrice: React.Dispatch<React.SetStateAction<number>>) {
  axios.get(`https://api.coingecko.com/api/v3/simple/price?vs_currencies=USD&ids=${coinList[idx].id}`)  // 
    .then(res => {
      setCoinPrice(+res.data[coinList[idx].id]['usd']); // API에서 usd가져오고, 돈 적용.
    });
}

// 코인 바뀌는 것에 따른 코인 개수 변경. 
function CoinSetting(getLastSelect: number, setCoinCount: React.Dispatch<React.SetStateAction<number[]>>, getCoinCount:number[], getFirstCoinPrice:number, getSecondCoinPrice:number) {
  let coin = [...getCoinCount]; // 기존꺼 가져오고. 
  let idx = getLastSelect + 1;  // 설정 바뀔 값의 인덱스
  idx = idx == 2 ? 0 : 1; // 적용. 
  coin[idx] = getLastSelect ? (coin[getLastSelect] * getSecondCoinPrice) / getFirstCoinPrice : coin[idx] = (coin[getLastSelect] * getFirstCoinPrice) / getSecondCoinPrice;  // 코인 가격 적용. 
  coin[idx].toFixed(10);  // 소수점 자릿수 제한. 

  setCoinCount(coin); // 적용.
}

export default App;
