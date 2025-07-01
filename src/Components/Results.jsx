const Results = ({ result }) => {
  if (!result) return null;

  return (
    <div className="alert alert-info">
      <h4 className="alert-heading">Results</h4>
      <p><strong>EV Monthly Cost:</strong> ₹{result.evMonthly.toFixed(2)}</p>
      <p><strong>Petrol Monthly Cost:</strong> ₹{result.petrolMonthly.toFixed(2)}</p>
      <p><strong>Monthly Savings:</strong> ₹{result.savings.toFixed(2)}</p>
      <p><strong>Break-even Time:</strong> {Math.ceil(result.breakEvenMonths)} months</p>
    </div>
  );
};
export default Results;