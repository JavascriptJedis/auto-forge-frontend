import React from "react"
import CarCard from "../components/CarCard"

const CarIndex = ({ cars }) => {
  return (
    <>
    <main>
      {cars?.map((car, index) => {
        return <CarCard car={car} index={index} />

      })}
    </main>
      </>
  )
}

export default CarIndex
