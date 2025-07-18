"use client";
import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [previousInput, setPreviousInput] = useState("");
  const [operation, setOperation] = useState(null);

  const handleNumberClick = (num) => {
    setInput(input + num);
  };

  const handleOperation = (op) => {
    if (input === "") return;
    setPreviousInput(input);
    setInput("");
    setOperation(op);
  };

  const calculate = () => {
    if (!operation || previousInput === "") return;
    
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(input);
    let result = 0;

    switch (operation) {
      case "+": result = num1 + num2; break;
      case "-": result = num1 - num2; break;
      case "×": result = num1 * num2; break;
      case "÷": result = num1 / num2; break;
      default: return;
    }

    setInput(result.toString());
    setOperation(null);
  };

  const reset = () => {
    setInput("");
    setPreviousInput("");
    setOperation(null);
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1)); 
 };

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="buttons">
        <Button onClick={reset} className="ac">AC</Button>
        <Button onClick={() => handleOperation("÷")}>÷</Button>
        <Button onClick={() => handleOperation("×")}>×</Button>
        <Button onClick={() => handleNumberClick(".")}>.</Button>
        <Button onClick={() => handleNumberClick("7")}>7</Button>
        <Button onClick={() => handleNumberClick("8")}>8</Button>
        <Button onClick={() => handleNumberClick("9")}>9</Button>
        <Button onClick={() => handleOperation("-")}>-</Button>
        <Button onClick={() => handleNumberClick("4")}>4</Button>
        <Button onClick={() => handleNumberClick("5")}>5</Button>
        <Button onClick={() => handleNumberClick("6")}>6</Button>
        <Button onClick={() => handleOperation("+")}>+</Button>
        <Button onClick={() => handleNumberClick("1")}>1</Button>
        <Button onClick={() => handleNumberClick("2")}>2</Button>
        <Button onClick={() => handleNumberClick("3")}>3</Button>
        <Button onClick={handleBackspace} className="backspace">⌫</Button>
        <Button onClick={() => handleNumberClick("0")} className="zero">0</Button>
        <Button onClick={calculate} className="equals">=</Button>
      </div>
    </div>
  );
}