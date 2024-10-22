import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/Swap.css'
import './css/Select.css'
import coinList from './Data'
import Modal from './Modal';
import SettingIcon from './Image/setting.png'

function App() {
  const [isSwap, setSwap] = useState<boolean>(true);
  const [getContainer, setContainer] = useState<number>(0);
  const [getFirstCoin, setFirstCoin] = useState<number>(3);
  const [getSecondCoin, setSecondCoin] = useState<number>(2);
  const [searchCoin, setSearchCoin] = useState<string>(''); //검색창 상태 관리
  const [getCoinCount, setCoinCount] = useState<number[]>([0, 0]);

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
            <CoinCount index={0} coinIndex={getFirstCoin}/>
            <p className='Arrow'>↓</p>
            <CoinCount index={1} coinIndex={getSecondCoin}/>
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
      />
    </div>
  );

  function CoinCount({index, coinIndex} : {index: number, coinIndex: number}) {

    

    return (
      <div className='InputPanel'> 
        <div className='Input'>``
          <input className='TextInput' placeholder='0.0' onInput={(result) => {
            //숫자만 써지게 하는거. (제작중)
            //const input = result.target as HTMLInputElement;
            //input.value = input.value.replace(/[^0-9]/g, '');
            let coin = [...getCoinCount];
            coin[index] = +result.currentTarget.value;
            coin[index].toFixed(10);
            setCoinCount(coin);
          }}></input>
          <button className='CoinChange' onClick={() => {
            setContainer(index);
            setSwap(false);
          }}>{coinList[coinIndex].name}</button>
        </div>
        <p className='USDText'>$0.0</p>
      </div>
    )
  }
}

export default App;
