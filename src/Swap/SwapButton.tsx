import '../css/SwapButton.css';

interface SwapButtonProps {
    getCoinCount: number[];
}
const SwapButton: React.FC<SwapButtonProps> = ({getCoinCount}) => {
    if (getCoinCount[0] != 0) //활성 해주어야한다.
    {
        return (
            <button className='SwapButton' onClick={() => {
                window.confirm("준비 중입니다.");
            }}>스왑</button>
        )
    }
    else {
        return (
            <button className='SwapButton disabled'>금액을 입력하세요.</button>
        )
    }
}

export default SwapButton;
