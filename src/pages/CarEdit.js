import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CarNewstyles.css";
import AFLogo from '../assets/zjsnbvuhx5e11.png'

const CarEdit = ({ cars, updateCar, currentUser }) => {
  const navigate = useNavigate();

  const { id } = useParams();
  let currentCar = cars?.find((car) => car.id === +id);

  const [editCar, setEditCar] = useState({
    year: currentCar.year,
    make: currentCar.make,
    model: currentCar.model,
    color: currentCar.color,
    miles: currentCar.miles,
    image: currentCar.image,
    cost: currentCar.cost,
    description: currentCar.description,
    user_id: currentUser.id,
  });

  const handleChange = (e) => {
    setEditCar({ ...editCar, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    updateCar(editCar, currentCar.id);
    navigate("/carindex");
  };

  return (
    <div className="form-div">
    <img className="new-car-img" src={AFLogo} alt="AutoForge logo" />
    <form>
      <label className="new-car-label" for="year">Year</label>
      <input
        className="new-car-input"
        id="year"
        type="text"
        name="year"
        onChange={handleChange}
        value={editCar.year}
        />

      <label className="new-car-label" for="make">Make</label>
      <input
        className="new-car-input"
        id="make"
        type="text"
        name="make"
        onChange={handleChange}
        value={editCar.make}
        />

      <label className="new-car-label" for="model">Model</label>
      <input
        className="new-car-input"
        id="model"
        type="text"
        name="model"
        onChange={handleChange}
        value={editCar.model}
        />

      <label className="new-car-label" for="color">Color</label>
      <input
        className="new-car-input"
        id="color"
        type="text"
        name="color"
        onChange={handleChange}
        value={editCar.color}
        />

      <label className="new-car-label" for="miles">Miles</label>
      <input
        className="new-car-input"
        id="miles"
        type="text"
        name="miles"
        onChange={handleChange}
        value={editCar.miles}
        />

      <label className="new-car-label" for="image">Image</label>
      <input
        className="new-car-input"
        id="image"
        type="text"
        name="image"
        onChange={handleChange}
        value={editCar.image}
        />

      <label className="new-car-label" for="cost">Cost</label>
      <input
        className="new-car-input"
        id="cost"
        type="text"
        name="cost"
        onChange={handleChange}
        value={editCar.cost}
        />

      <label className="new-car-label" for="description">Project Details</label>
      <textarea 
        rows="6"
        placeholder="Tell us about your car..."
        className="new-car-input"
        id="description"
        type="text"
        name="description"
        onChange={handleChange}
        value={editCar.description}

      />
     <div className="new-btn-container">
      <button className="new-car-btn" onClick={handleSubmit} name="update">
        Update
      </button>
      <button className="new-car-btn" onClick={handleSubmit} name="cancel">
        Cancel

      </button>
      </div>
    </form>
  </div>
  );
};

export default CarEdit;
