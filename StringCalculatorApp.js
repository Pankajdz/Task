import React, { useState } from 'react';

const StringCalculatorApp = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState<number | string>('');

    const handleAdd = () => {
        try {
            const sum = add(input);
            setResult(sum);
        } catch (error) {
            setResult(error.message);
        }
    };

    return (
        <div>
            <h1>String Calculator</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter numbers"
            />
            <button onClick={handleAdd}>Calculate</button>
            <p>Result: {result}</p>
        </div>
    );
};

export default StringCalculatorApp;
