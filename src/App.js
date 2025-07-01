import { useState, useEffect } from "react";
import CostForm from "./Components/CostForm";
import Results from "./Components/Results";
import ChartDisplay from "./Components/ChartDisplay";

function App() {
  const [result, setResult] = useState(() => {
    const saved = localStorage.getItem("evResults");
    return saved ? JSON.parse(saved) : null;
  });

  const calculateCost = (data) => {
    const parsed = Object.fromEntries(
      Object.entries(data).map(([k, v]) => [k, parseFloat(v)])
    );

    const monthlyKm = parsed.dailyKm * 30;
    const petrolMonthly = (monthlyKm / parsed.petrolMileage) * parsed.fuelCost;
    const evMonthly = (monthlyKm / parsed.evMileage) * parsed.elecCost;
    const savings = petrolMonthly - evMonthly;
    const breakEvenMonths = (parsed.evCost - parsed.petrolCost) / savings;

    const resultData = {
      petrolMonthly,
      evMonthly,
      savings,
      breakEvenMonths,
      ...parsed,
    };

    setResult(resultData);
    localStorage.setItem("evResults", JSON.stringify(resultData));
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">EV vs Petrol Cost Calculator</h1>
      <CostForm onCalculate={calculateCost} />
      <Results result={result} />
      {result && <ChartDisplay result={result} />}
    </div>
  );
}

export default App;
