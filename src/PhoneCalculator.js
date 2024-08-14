import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./style.css";

const Button = React.memo(({ value, onClick }) => {
    return (
        <button onClick={() => onClick(value)}>
            {value}
        </button>
    );
});
function Calculator() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);

    const handleClick = (value) => {
        if (value === "C") {
            setInput("");
            setResult(null);
        } else if (value === "=") {
            try {
                setResult(evaluate(input));
            } catch {
                setResult("Lỗi cú pháp");
            }
        } else if (["+", "-", "*", "/"].includes(value)) {
            setInput((prev) => prev + " " + value + " ");
        } else {
            setInput((prev) => {
                if (prev === "" || prev.endsWith(" ")) {
                    return prev + value;
                } else {
                    const parts = prev.split(" ");
                    const lastPart = parts.pop();
                    return parts.join(" ") + " " + value;
                }
            });
        }
    };

    return (
        <div className="calculator">
            <div className="display">
                <div className="input">{input}</div>
                <div className="result">{result !== null ? `= ${result}` : ""}</div>
            </div>
            <div className="keyboard">
                {["1", "2", "3", "/", "4", "5", "6", "x", "7", "8", "9", "+", "0", "=", "DEL", "-"].map((value) => (
                    <button key={value} onClick={() => handleClick(value)}>
                        {value}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default PhoneCalculator;
