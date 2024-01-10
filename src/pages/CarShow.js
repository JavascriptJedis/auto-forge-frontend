import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "./CarShow.css";

const CarShow = ({ cars, deleteCar }) => {
  const { id } = useParams();
  let currentCar = cars?.find((car) => car.id === +id);

  return (
    <>
      <div className="show-page-card">
        <div className="show-car-details">
          <div className="detail-item-pic">
            <strong></strong>
            <img className="img" src={currentCar.image} alt="Car Image" />
          </div>
          <div className="detail-item">
            <strong>Year:</strong> {currentCar.year}
          </div>
          <div className="detail-item">
            <strong>Make:</strong> {currentCar.make}
          </div>
          <div className="detail-item">
            <strong>Model:</strong> {currentCar.model}
          </div>
          <div className="detail-item">
            <strong>Color:</strong> {currentCar.color}
          </div>
          <div className="detail-item">
            <strong>Miles:</strong> {currentCar.miles}
          </div>
          <div className="detail-item">
            <strong>Cost:</strong> {currentCar.cost}
          </div>
          <div className="detail-item">
            <strong>Description:</strong> {currentCar.description}
          </div>
        </div>
        <div className="show-car-details-buttons">
          <NavLink to={`/caredit/${currentCar.id}`}>
            <button className="edit-btn">Edit Project</button>
          </NavLink>
          <NavLink to={"/carindex"}>
            <button
              onClick={() => deleteCar(currentCar.id)}
              className="edit-btn"
            >
              Delete Project
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default CarShow;
