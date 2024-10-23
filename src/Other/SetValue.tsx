
export default function SetValue(getCoinCount: number[], index: number, input: string, getCurrentCoinPrice:number, getOtherCoinPrice:number, setCoinCount: React.Dispatch<React.SetStateAction<number[]>>) {

    //현 코인 state에 적용
    let coin = [...getCoinCount];
    if (input === '-')
    {
        coin[index] = +input;
        coin[index].toFixed(10); 
    }
    
    //다른 코인 state에 적용
    let idx = index + 1;
    idx = idx == 2 ? 0 : 1;
    coin[idx] = (coin[index] * getCurrentCoinPrice) / getOtherCoinPrice;
    coin[idx].toFixed(10);
    
    setCoinCount(coin);
}