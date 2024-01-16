import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CarNewstyles.css";
import AFLogo from "../assets/zjsnbvuhx5e11.png";

const CarNew = ({ createCar, currentUser }) => {
  const navigate = useNavigate();
  const [newCar, setNewCar] = useState({
    year: "",
    make: "",
    model: "",
    color: "",
    miles: "",
    image: "",
    cost: "",
    description: "",
    user_id: currentUser.id,
  });

  const handleChange = (e) => {
    setNewCar({ ...newCar, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createCar(newCar);
    navigate("/carindex");
  };

  return (
    <>
      <div className="form-div">
        <form>
          <img className="new-car-img" src={AFLogo} alt="AutoForge logo" />
          <label className="new-car-label" for="year">
            Year
          </label>
          <input
            className="new-car-input"
            id="year"
            type="text"
            name="year"
            maxlength="15"
            onChange={handleChange}
            value={newCar.year}
          />

          <label className="new-car-label" for="make">
            Make
          </label>
          <input
            className="new-car-input"
            id="make"
            type="text"
            name="make"
            maxlength="15"
            onChange={handleChange}
            value={newCar.make}
          />

          <label className="new-car-label" for="model">
            Model
          </label>
          <input
            className="new-car-input"
            id="model"
            type="text"
            name="model"
            maxlength="15"
            onChange={handleChange}
            value={newCar.model}
          />

          <label className="new-car-label" for="color">
            Color
          </label>
          <input
            className="new-car-input"
            id="color"
            type="text"
            name="color"
            maxlength="15"
            onChange={handleChange}
            value={newCar.color}
          />

          <label className="new-car-label" for="miles">
            Miles
          </label>
          <input
            className="new-car-input"
            id="miles"
            type="text"
            name="miles"
            maxlength="15"
            onChange={handleChange}
            value={newCar.miles}
          />

          <label className="new-car-label" for="image">
            Image
          </label>
          <input
            className="new-car-input"
            id="image"
            type="text"
            name="image"
            onChange={handleChange}
            value={newCar.image}
          />

          <label className="new-car-label" for="cost">
            Cost
          </label>
          <input
            className="new-car-input"
            id="cost"
            type="text"
            name="cost"
            maxlength="15"
            onChange={handleChange}
            value={newCar.cost}
          />

          <label className="new-car-label" for="description">
            Project Details
          </label>
          <textarea
            rows="6"
            placeholder="Tell us about your car..."
            className="new-car-input"
            id="description"
            type="text"
            name="description"
            onChange={handleChange}
            value={newCar.description}
          />
          <div className="new-btn-container">
            <button
              className="new-car-btn"
              onClick={handleSubmit}
              name="update"
            >
              Create
            </button>
            <button
              className="new-car-btn"
              onClick={handleSubmit}
              name="cancel"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CarNew;
