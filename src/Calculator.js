import React, { useState } from "react";
import { evaluate } from 'mathjs';
import ErrorMessage from './ErrMessage';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [err, setError] = useState('');
    const [activeTab, setActiveTab] = useState('tinhGiaTri');

    const handleEvent = (e) => {
        setInput(e.target.value);
    };

    const calBasic = () => {
        const bas = /^[0-9+\-*/().\s]+$/;
        if (bas.test(input)) {
            try {
                setResult(evaluate(input));
                setError('');
            } catch (err) {
                setResult(null);
                setError('Lỗi cú pháp trong phép tính.');
            }
        } else {
            setResult(null);
            setError('Chỉ tính các phép toán cơ bản: +, -, *, /.');
        }
    };

    const calTrigonometry = () => {
        const trig = /^(sin|cos|tan|cot|sqrt)\(/;
        if (trig.test(input)) {
            try {
                const result = evaluate(input);
                setResult(result);
                setError('');
            } catch {
                setResult(null);
                setError('Có lỗi xảy ra trong phép tính hàm lượng giác. Vui lòng kiểm tra lại cú pháp.');
            }
        } else {
            setResult(null);
            setError('Chỉ tính các hàm lượng giác: sin, cos, tan, cotan và căn bậc. Lưu ý giá trị tính để trong dấu ().');
        }
    };
    return (

        <div className="box">
            <h2>Calculator</h2>
            <Tabs
                activeKey={activeTab}
                onSelect={(key) => setActiveTab(key)}
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="tinhGiaTri" title="Tính giá trị">
                    <input type="text" value={input} onChange={handleEvent} placeholder="Nhập vào biểu thức tính..." />
                    <button onClick={calBasic}> Tính </button>
                    {err && <ErrorMessage message={err} />}
                    <div> Kết quả: {result} </div>
                </Tab>
                <Tab eventKey="hamLuongGiac" title="Tính hàm lượng giác">
                    <input type="text" value={input} onChange={handleEvent} placeholder="Nhập vào hàm lượng giác cần tính..." />
                    <button onClick={calTrigonometry}> Tính </button>
                    {err && <ErrorMessage message={err} />}
                    <div> Kết quả: {result} </div>
                </Tab>
            </Tabs>
        </div>
    );
}

export default Calculator;