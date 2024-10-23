import '../App.css';
import '../css/Swap.css'
import coinList from '../Other/Data'
import SetValue from '../Other/SetValue';

interface CoinCountProps {
    index: number;
    coinIndex: number;
    setSwap: React.Dispatch<React.SetStateAction<boolean>>;
    setContainer: React.Dispatch<React.SetStateAction<number>>;
    getCurrentCoinPrice: number;
    getOtherCoinPrice: number;
    getCoinCount: number[];
    setCoinCount: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function CoinCount({index, coinIndex, setSwap, setContainer, getCurrentCoinPrice, getOtherCoinPrice, getCoinCount, setCoinCount} : CoinCountProps) {
    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        //숫자만 써지게 하는거. 
        const input = event.target as HTMLInputElement;
        input.value = input.value.replace(/[^0-9\.]/g, ""); //소수점도 같이 없어짐. 

        SetValue(getCoinCount, index, input.value, getCurrentCoinPrice, getOtherCoinPrice, setCoinCount);
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


//type='number' 