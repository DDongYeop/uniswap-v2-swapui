import React, { useRef, useState } from 'react';
import './App.css';
import './css/Swap.css'
import './css/Select.css'
import coinList from './Data'
import Modal from './Modal';
import SettingIcon from './Image/setting.png'
import axios from 'axios'

function SetCoinPrice(idx: number, setCoinPrice: React.Dispatch<React.SetStateAction<number>>) {
  axios.get(`https://api.coingecko.com/api/v3/simple/price?vs_currencies=USD&ids=${coinList[idx].id}`)
    .then(res => {
      setCoinPrice(+res.data[coinList[idx].id]['usd']);
      console.log(+res.data[coinList[idx].id]['usd']);
    });
}

function App() {
  const [isSwap, setSwap] = useState<boolean>(true);
  const [getContainer, setContainer] = useState<number>(0);
  const [getFirstCoin, setFirstCoin] = useState<number>(3);
  const [getFirstCoinPrice, setFirstCoinPrice] = useState<number>(0);
  const [getSecondCoin, setSecondCoin] = useState<number>(2);
  const [getSecondCoinPrice, setSecondCoinPrice] = useState<number>(0);
  const [searchCoin, setSearchCoin] = useState<string>(''); //검색창 상태 관리
  const [getCoinCount, setCoinCount] = useState<number[]>([0, 0]);

  SetCoinPrice(getFirstCoin, setFirstCoinPrice);
  SetCoinPrice(getSecondCoin, setSecondCoinPrice);

  return (
    <div className="App">
      <div className={`Swap`}>
        <div className='SwapContainerBackPanel'>
          <div className='TopPanel'>
            <h5 className='TopText'>스왑</h5>
            <img className='TopButton' src={SettingIcon} onClick={() => {
                window.confirm("준비 중입니다.");
              }}/>
          </div>
            <CoinCount index={0} coinIndex={getFirstCoin} setSwap={setSwap} setContainer={setContainer} getCurrentCoinPrice={getFirstCoinPrice} getOtherCoinPrice={getSecondCoinPrice} getCoinCount={getCoinCount} setCoinCount={setCoinCount}/>
            <p className='Arrow'>↓</p>
            <CoinCount index={1} coinIndex={getSecondCoin} setSwap={setSwap} setContainer={setContainer} getCurrentCoinPrice={getSecondCoinPrice} getOtherCoinPrice={getFirstCoinPrice} getCoinCount={getCoinCount} setCoinCount={setCoinCount}/>
            { /* 스왑 버튼 만들어야함. */ }
            <button className='SwapButton' onClick={() => {
              window.confirm("준비 중입니다.");
            }}>스왑</button>
        </div>
      </div>
      <Modal
        isOpen={isSwap}
        setOpen={setSwap}
        getContainer={getContainer}
        setFirstCoin={setFirstCoin}
        setSecondCoin={setSecondCoin}
        searchCoin={searchCoin}
        setSearchCoin={setSearchCoin}
        setFirstCoinPrice={setFirstCoinPrice}
        setSecondCoinPrice={setSecondCoinPrice}
      />
    </div>
  );
}


function CoinCount({index, coinIndex, setSwap, setContainer, getCurrentCoinPrice, getOtherCoinPrice, getCoinCount, setCoinCount} : {index: number, coinIndex: number, setContainer: React.Dispatch<React.SetStateAction<number>>, getCurrentCoinPrice: number, getOtherCoinPrice: number, setSwap: React.Dispatch<React.SetStateAction<boolean>>, getCoinCount: number[], setCoinCount: React.Dispatch<React.SetStateAction<number[]>>}) {
  const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    //숫자만 써지게 하는거. 
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, ''); //소수점도 같이 없어짐. 

    //현 코인 state에 적용
    let coin = [...getCoinCount];
    coin[index] = +input.value;
    coin[index].toFixed(10); 

    //다른 코인 state에 적용
    let idx = index + 1;
    idx = idx == 2 ? 0 : 1;
    coin[idx] = (coin[index] * getCurrentCoinPrice) / getOtherCoinPrice;
    coin[idx].toFixed(10);

    setCoinCount(coin);
  }

  return (
    <div className='InputPanel'> 
      <div className='Input'>
        <input className='TextInput' value={+getCoinCount[index].toFixed(10)} onChange={onChange} placeholder='0.0'  onFocus={OnFocus}></input>
        <button className='CoinChange' onClick={() => {
          setContainer(index);
          setSwap(false);
        }}>{coinList[coinIndex].name}</button>
      </div>
      <p className='USDText'>${
        getCoinCount[index] * getCurrentCoinPrice
      }</p>
    </div>
  )
}

function OnFocus(element: React.ChangeEvent<HTMLInputElement>) {
  element.currentTarget.focus();
}

export default App;
