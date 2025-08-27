import React from "react";

const CalculatorBtn = (props) => {
  return (
    <input
      type="button"
      value={props.value}
      onClick={props.onClick}
      className="h-14 rounded-2xl bg-white/10 text-white text-xl font-semibold shadow-sm hover:bg-white/20 active:bg-white/30 ring-1 ring-white/10 transition-colors"
    />
  );
};

export default CalculatorBtn;
