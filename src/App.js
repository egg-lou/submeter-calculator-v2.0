import React, { useState } from "react";

function App() {
  const [currentAmount, setCurrentAmount] = useState("");
  const [previousAmount, setPreviousAmount] = useState("");
  const [rate, setRate] = useState("");
  const [displayValue, setDisplayValue] = useState("PHP 00.00");
  const [isLoading, setisLoading] = useState(false)

  const handleClick = () => {
    if (!currentAmount || !previousAmount || !rate) {
      window.alert("Please Enter a Value on ALL FIELDS!");
    } else {
      setisLoading(true);
      const currentAmountFloat = parseFloat(currentAmount);
      const previousAmountFloat = parseFloat(previousAmount);
      const rateFloat = parseFloat(rate);

      const newAmount = currentAmountFloat - previousAmountFloat;
      const amountToPay = newAmount * rateFloat;
      setDisplayValue(`PHP ${amountToPay.toFixed(2)}`);
      setisLoading(false);
    }
  };

  return (
    <div className="glass-card h-screen w-auto flex justify-center items-center">
      <div className="card p-7 rounded-3xl shadow-2xl shadow-inherit bg-opacity-100 backdrop-blur-xl border-4 border-s-cyan-300 border-e-white border-t-white border-b-cyan-300 border-opacity-100">
        <h2 className="text-4xl font-medium mb-2 text-center font-bold">Submeter Calculator</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="currentAmount" className="text-center text-xl">Current Amount</label>
          <input
            type="text"
            id="currentAmount"
            className="border border-gray-300 rounded-md px-3 py-2 text-center"
            value={currentAmount}
            onChange={(e) => setCurrentAmount(e.target.value)}
            step="0.01"
          />

          <label htmlFor="previousAmount" className="text-center text-xl">Previous Amount</label>
          <input
            type="text"
            id="previousAmount"
            className="border border-gray-300 rounded-md px-3 py-2 text-center"
            value={previousAmount}
            onChange={(e) => setPreviousAmount(e.target.value)}
            step="0.01"
          />

          <label htmlFor="rate" className="text-center text-xl">KWH Rate</label>
          <input
            type="text"
            id="rate"
            className="border border-gray-300 rounded-md px-3 py-2 text-center"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            step="0.01"
          />

          <label htmlFor="displayValue" className="text-center text-xl">Amount to Pay:</label>
          <input
            type="text"
            id="displayValue"
            className="border border-gray-300 rounded-md px-3 py-2 text-center"
            value={displayValue}
            readOnly
          />

          <button
            type="button"
            className="border-dashed bg-white text-black hover:text-white rounded-md px-3 py-2 hover:bg-black transition-colors transition-delay-100"
            onClick={handleClick}
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
