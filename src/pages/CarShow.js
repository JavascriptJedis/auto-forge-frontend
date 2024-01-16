import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./CarShow.css";

const CarShow = ({ cars, deleteCar, currentUser }) => {
  const { id } = useParams();
  let currentCar = cars?.find((car) => car.id === +id);

  return (
    <>
      <div className="show-page-container">
        <div className="show-container">
          <div className="show-image-container">
            <img src={currentCar.image} alt="Car Image" />
          </div>
          <div className="show-text-container">
            <div className="show-text-padding-container">
              <div className="show-text-row">
                <div className="show-left-row">
                  <h5>
                    <b>Make:</b> <br /> <span>{currentCar.make}</span>
                  </h5>
                  <h5>
                    <b>Model:</b> <br /> <span>{currentCar.model}</span>
                  </h5>
                </div>
                <div className="show-text-mid-dividers">
                  <h5>
                    <b>Year:</b> <br /> <span>{currentCar.year}</span>
                  </h5>
                  <h5>
                    <b>Miles:</b> <br /> <span>{currentCar.miles}</span>
                  </h5>
                </div>
                <div className="show-right-row">
                  <h5>
                    <b>Color:</b> <br /> <span>{currentCar.color}</span>
                  </h5>
                  <h5>
                    <b>Cost:</b> <br /> <span>{currentCar.cost}</span>
                  </h5>
                </div>
              </div>
              <div className="show-text-small-row">
                <div className="show-small-left-row">
                  <h5>
                    <b>Make:</b> <br /> <span>{currentCar.make}</span>
                  </h5>
                  <h5>
                    <b>Model:</b> <br /> <span>{currentCar.model}</span>
                  </h5>
                  <h5>
                    <b>Year:</b> <br /> <span>{currentCar.year}</span>
                  </h5>
                </div>
                <div className="show-small-right-row">
                  <h5>
                    <b>Miles:</b> <br /> <span>{currentCar.miles}</span>
                  </h5>
                  <h5>
                    <b>Color:</b> <br /> <span>{currentCar.color}</span>
                  </h5>
                  <h5>
                    <b>Cost:</b> <br /> <span>{currentCar.cost}</span>
                  </h5>
                </div>
              </div>
              <div className="show-text-desc-container">
                <div className="show-divider" />
                <p>
                  <span>
                    <b>Project Details:</b>
                  </span>
                  <br />
                  {currentCar.description}
                </p>
                <div
                  className={`show-text-button-container ${
                    currentUser === null
                      ? "disable-button"
                      : currentUser.id === currentCar.user_id
                      ? ""
                      : "disable-button"
                  }`}
                >
                  <div className={"show-car-details-buttons"}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarShow;
