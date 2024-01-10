import React from "react"
import CarCard from "../components/CarCard"
import './CarIndex.css'


const MyCarIndex = ({ cars, currentUser}) => {
console.log('cars', cars)
console.log('user:', currentUser)

const myCars = cars?.filter(car => currentUser.id === car.user_id)
console.log("mycars:", myCars)
    return (
        <>
        <main>
          <div className="index-card-container">
          {myCars?.map((car, index) => {
            return <CarCard car={car} index={index} />
          })}
          </div>
        </main>
          </>
    )

}

export default MyCarIndex