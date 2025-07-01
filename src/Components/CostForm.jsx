import { useState } from "react";

const CostForm = ({ onCalculate }) => {
  const [data, setData] = useState({
    dailyKm: "",
    fuelCost: "",
    petrolMileage: "",
    elecCost: "",
    evMileage: "",
    evCost: "",
    petrolCost: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(data);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row">
        {Object.entries(data).map(([key, val], idx) => (
          <div className="col-md-6 mb-3" key={idx}>
            <label className="form-label text-capitalize">
              {key.replace(/([A-Z])/g, " $1")}
            </label>
            <input
              type="number"
              name={key}
              value={val}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        ))}
      </div>
      <button type="submit" className="btn btn-success w-100 mt-2">
        Calculate
      </button>
    </form>
  );
};

export default CostForm;
