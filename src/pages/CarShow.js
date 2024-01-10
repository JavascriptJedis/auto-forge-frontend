import React from "react"
import { NavLink, useParams } from "react-router-dom"

const CarShow = ({ cars, deleteCar }) => {
  const { id } = useParams()
  let currentCar = cars?.find((car) => car.id === +id)

  
  return (
    <>
      <div>Car Show Page</div>
      <div className="show-page-card">
        <div className="picture"></div>
        <div className="show-car-details">
          {currentCar.year}
          {currentCar.make}
          {currentCar.model}
          {currentCar.color}
          {currentCar.miles}
          {currentCar.cost}
          {currentCar.description}
          <NavLink to={`/caredit/${currentCar.id}`}>
              <button className="edit-btn">Edit Project</button>
            </NavLink>
            <NavLink to={"/carindex"}>
              <button onClick={() => deleteCar(currentCar.id)} className="edit-btn">
                Delete Project
              </button>
            </NavLink>
        </div>
      </div>
    </>
  )
}

export default CarShow;
