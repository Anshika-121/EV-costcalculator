import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ChartDisplay = ({ result }) => {
  const years = [1, 2, 3, 4, 5];
  const evCosts = years.map((y) => result.evMonthly * 12 * y);
  const petrolCosts = years.map((y) => result.petrolMonthly * 12 * y);

  const data = {
    labels: years.map((y) => `${y} Yr`),
    datasets: [
      {
        label: "EV Cost (₹)",
        data: evCosts,
        backgroundColor: "#28a745",
      },
      {
        label: "Petrol Cost (₹)",
        data: petrolCosts,
        backgroundColor: "#dc3545",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="mt-4">
      <h5 className="text-center mb-3">Cost Comparison Over 5 Years</h5>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartDisplay;
