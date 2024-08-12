import React, { useState } from "react";
import { evaluate } from 'mathjs';

function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);

    const handleEvent = (e) => {
        setInput(e.target.value);
    };

    const cal = () => {
        try {
            setResult(evaluate(input));
        } catch {
            setResult(' Bị lỗi xử lý ');
        }
    };
    return (
        <div>
            <h2>Calculator</h2>
            <input type="text" value={input} onChange={handleEvent} />
            <button onClick={cal}> Tính </button>
            <div> Kết quả: {result} </div>
        </div>
    );
}

export default Calculator;