import React from "react";
import CalculatorBtn from "../components/CalculatorBtn";
import { useState } from "react";

const Home = () => {
  
  const[result, setResult] = useState('');

  const clickHandler = (event) =>{
    setResult(result.concat(event.target.value));
  }

  const clearClick = () =>{
    setResult('');
  }

  const calculate = () =>{
    setResult(eval(result).toString());
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 p-6">
        <div className="backdrop-blur-lg bg-white/10 shadow-2xl rounded-3xl border border-white/20 w-full max-w-md">
          <div className="p-6">
            <input
              type="text"
              value={result}
              placeholder="0"
              readOnly
              className="w-full text-right text-4xl font-semibold tracking-wide px-5 py-6 rounded-2xl bg-black/40 text-white placeholder-white/50 ring-1 ring-white/20 focus:outline-none select-none"
            />
          </div>
          <div className="grid grid-cols-4 gap-3 px-6 pb-6">
            <CalculatorBtn value="7" onClick={clickHandler} />
            <CalculatorBtn value="8" onClick={clickHandler} />
            <CalculatorBtn value="9" onClick={clickHandler} />
            <CalculatorBtn value="/" onClick={clickHandler} />

            <CalculatorBtn value="4" onClick={clickHandler} />
            <CalculatorBtn value="5" onClick={clickHandler} />
            <CalculatorBtn value="6" onClick={clickHandler} />
            <CalculatorBtn value="*" onClick={clickHandler} />

            <CalculatorBtn value="1" onClick={clickHandler} />
            <CalculatorBtn value="2" onClick={clickHandler} />
            <CalculatorBtn value="3" onClick={clickHandler} />
            <CalculatorBtn value="-" onClick={clickHandler} />

            <CalculatorBtn value="0" onClick={clickHandler} />
            <CalculatorBtn value="." onClick={clickHandler} />
            <CalculatorBtn value="%" onClick={clickHandler} />
            <CalculatorBtn value="+" onClick={clickHandler} />
          </div>
          <div className="grid grid-cols-2 gap-3 px-6 pb-6">
            <input
              type="button"
              value="Clear"
              className="h-14 rounded-2xl bg-rose-500 text-white text-xl font-semibold shadow-md hover:bg-rose-600 active:bg-rose-700 transition-colors"
              onClick={clearClick}
            />
            <input
              type="button"
              value="="
              className="h-14 rounded-2xl bg-emerald-500 text-white text-2xl font-bold shadow-md hover:bg-emerald-600 active:bg-emerald-700 transition-colors"
              onClick={calculate}
            />
          </div>
          <p className="text-white/80 text-center pb-5 text-sm">Made by <span className="font-semibold">Sanskar Kishan ❤️</span></p>
        </div>
      </div>
    </>
  );
};

export default Home;
