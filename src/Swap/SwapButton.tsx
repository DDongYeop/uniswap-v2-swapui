import '../css/SwapButton.css';

interface SwapButtonProps {
    getCoinCount: number[];
}

export default function SwapButton({getCoinCount} : SwapButtonProps) {
    if (getCoinCount[0] != 0) { // 활성화 된 상태
        return (
            <button className='SwapButton' onClick={() => {
                window.confirm("준비 중입니다."); // 준비 중 alert
            }}>스왑</button>
        )
    }
    else { // 활성화 되면 안 될때 
        return (
            <button className='SwapButton disabled'>금액을 입력하세요.</button>
        )
    }
}
