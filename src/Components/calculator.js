import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [operation, setOperation] = useState('addition');
  const [result, setResult] = useState('');

  const handleNumberClick = (value) => {
    if (operation === 'addition' || operation === 'subtraction' || operation === 'multiplication' || operation === 'division' || operation === 'power') {
      setInput1(input1 + value);
    } else {
      setInput2(input2 + value);
    }
  };

  const handleClear = () => {
    setInput1('');
    setInput2('');
    setResult('');
  };

  const handleCalculate = () => {
    let res = 0;
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    switch (operation) {
      case 'addition':
        res = num1 + num2;
        break;
      case 'subtraction':
        res = num1 - num2;
        break;
      case 'multiplication':
        res = num1 * num2;
        break;
      case 'division':
        res = num1 / num2;
        break;
      case 'squareRoot':
        res = Math.sqrt(num1);
        break;
      case 'power':
        res = Math.pow(num1, num2);
        break;
      case 'areaOfPolygon':
        // Area of a regular polygon = (n * s^2) / (4 * tan(pi / n))
        // Here we assume n is input1 and s is input2
        res = (num1 * Math.pow(num2, 2)) / (4 * Math.tan(Math.PI / num1));
        break;
      case 'areaOfCylinder':
        // Area of a cylinder = 2 * pi * r * h + 2 * pi * r^2
        // Here we assume r is input1 and h is input2
        res = 2 * Math.PI * num1 * num2 + 2 * Math.PI * Math.pow(num1, 2);
        break;
      case 'surfaceAreaOfCylinder':
        // Surface area of a cylinder = 2 * pi * r * h
        // Here we assume r is input1 and h is input2
        res = 2 * Math.PI * num1 * num2;
        break;
      default:
        res = 0;
    }

    setResult(res);
  };

  const getHint = () => {
    switch (operation) {
      case 'areaOfPolygon':
        return "Enter the number of sides and the length of a side";
      case 'areaOfCylinder':
        return "Enter the radius and the height";
      case 'surfaceAreaOfCylinder':
        return "Enter the radius and the height";
      case 'squareRoot':
        return "Enter the number to find the square root";
      default:
        return "Enter two numbers";
    }
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <div className="hint">{getHint()}</div>
      <div className="inputs">
        <input 
          type="text" 
          placeholder="Input 1" 
          value={input1} 
          onChange={(e) => setInput1(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Input 2" 
          value={input2} 
          onChange={(e) => setInput2(e.target.value)} 
          disabled={operation === 'squareRoot'}
        />
      </div>
      <div className="dropdown">
        <select onChange={(e) => setOperation(e.target.value)} value={operation}>
          <option value="addition">Addition (+)</option>
          <option value="subtraction">Subtraction (-)</option>
          <option value="multiplication">Multiplication (x)</option>
          <option value="division">Division (/)</option>
          <option value="squareRoot">Square Root</option>
          <option value="power">Power (^)</option>
          <option value="areaOfPolygon">Area of Polygon</option>
          <option value="areaOfCylinder">Area of Cylinder</option>
          <option value="surfaceAreaOfCylinder">Surface Area of Cylinder</option>
        </select>
        <button onClick={handleClear}>Clear</button>
      </div>
      <div className="calculator-body">
        <div className="numbers">
          {['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', '00'].map((num) => (
            <button key={num} onClick={() => handleNumberClick(num)}>
              {num}
            </button>
          ))}
        </div>
        <button className="calculate" onClick={handleCalculate}>
          Calculate
        </button>
      </div>
      <div className="output">
        <h3>Output:</h3>
        <div className="output-box">{result}</div>
      </div>
    </div>
  );
};

export default Calculator;
