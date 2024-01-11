import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CarEditstyles.css";
import editCarimg from "../assets/zjsnbvuhx5e11.png";

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
    <div className="car-edit-container">
      <form>
        <label for="year">Year</label>
        <input
          onChange={handleChange}
          id="year"
          value={editCar.year}
          type="text"
          name="year"
        />

        <label for="make">Make</label>
        <input
          onChange={handleChange}
          id="make"
          value={editCar.make}
          type="text"
          name="make"
        />

        <label for="model">Model</label>
        <input
          onChange={handleChange}
          id="model"
          value={editCar.model}
          type="text"
          name="model"
        />

        <label for="color">Color</label>
        <input
          onChange={handleChange}
          id="color"
          value={editCar.color}
          type="text"
          name="color"
        />

        <label for="miles">Miles</label>
        <input
          onChange={handleChange}
          id="miles"
          value={editCar.miles}
          type="text"
          name="miles"
        />

        <label for="image">Image</label>
        <input
          onChange={handleChange}
          id="image"
          value={editCar.image}
          type="text"
          name="image"
        />

        <label for="cost">Cost</label>
        <input
          onChange={handleChange}
          id="cost"
          value={editCar.cost}
          type="text"
          name="cost"
        />

        <label for="description">Description</label>
        <textarea
          rows="6"
          onChange={handleChange}
          id="description"
          value={editCar.description}
          type="text"
          name="description"
        />
        <div className="btn-container">
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
