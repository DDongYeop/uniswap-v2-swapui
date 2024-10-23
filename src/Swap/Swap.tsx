import '../App.css';
import '../css/Swap.css';
import Modal from '../Modal/Modal';
import SettingIcon from '../Image/setting.png'
import CoinCount from './CoinCount'
import SwapButton from './SwapButton';

interface SwapProps {
    getIsSwap: boolean;
    setIsSwap: React.Dispatch<React.SetStateAction<boolean>>;
    getContainer: number;
    setContainer: React.Dispatch<React.SetStateAction<number>>;
    getFirstCoin: number;
    setFirstCoin: React.Dispatch<React.SetStateAction<number>>;
    getFirstCoinPrice: number;
    setFirstCoinPrice: React.Dispatch<React.SetStateAction<number>>;
    getSecondCoin: number;
    setSecondCoin: React.Dispatch<React.SetStateAction<number>>;
    getSecondCoinPrice: number;
    setSecondCoinPrice: React.Dispatch<React.SetStateAction<number>>;
    getSearchCoin: string;
    setSearchCoin: React.Dispatch<React.SetStateAction<string>>;
    getCoinCount: number[];
    setCoinCount: React.Dispatch<React.SetStateAction<number[]>>; 
}

export default function Swap({getIsSwap, setIsSwap, getContainer, setContainer, getFirstCoin, setFirstCoin, getFirstCoinPrice, setFirstCoinPrice, getSecondCoin, setSecondCoin, getSecondCoinPrice, setSecondCoinPrice, getSearchCoin, setSearchCoin, getCoinCount, setCoinCount} : SwapProps) {
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
                    <CoinCount 
                        index={0} 
                        coinIndex={getFirstCoin} 
                        setSwap={setIsSwap} 
                        setContainer={setContainer} 
                        getCurrentCoinPrice={getFirstCoinPrice} 
                        getOtherCoinPrice={getSecondCoinPrice} 
                        getCoinCount={getCoinCount} 
                        setCoinCount={setCoinCount}/>
                    <p className='Arrow'>↓</p>
                    <CoinCount 
                        index={1} 
                        coinIndex={getSecondCoin} 
                        setSwap={setIsSwap} 
                        setContainer={setContainer} 
                        getCurrentCoinPrice={getSecondCoinPrice} 
                        getOtherCoinPrice={getFirstCoinPrice} 
                        getCoinCount={getCoinCount} 
                        setCoinCount={setCoinCount}/>
                    <SwapButton getCoinCount={getCoinCount}></SwapButton>
                </div>
            </div>
            <Modal
                isOpen={getIsSwap}
                setOpen={setIsSwap}
                getContainer={getContainer}
                setFirstCoin={setFirstCoin}
                setSecondCoin={setSecondCoin}
                searchCoin={getSearchCoin}
                setSearchCoin={setSearchCoin}
                setFirstCoinPrice={setFirstCoinPrice}
                setSecondCoinPrice={setSecondCoinPrice}
            />
        </div>
    )
}
