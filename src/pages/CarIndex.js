import React from "react"
import CarCard from "../components/CarCard"
import './CarIndex.css'

const CarIndex = ({ cars }) => {
  return (
    <>
    <main>
      <div className="index-card-container">
        {cars?.map((car, index) => {
          return <CarCard car={car} index={index} />

        })}
      </div>
    </main>
      </>
  )
}

export default CarIndex