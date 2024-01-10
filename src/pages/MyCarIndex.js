
import CarCard from "../components/CarCard"


const MyCarIndex = ({ cars, currentUser}) => {
console.log('cars', cars)
console.log('user:', currentUser)

const myCars = cars?.filter(car => currentUser.id === car.user_id)
console.log("mycars:", myCars)
    return (
        <>
        <main>
          {myCars?.map((car, index) => {
            return <CarCard car={car} index={index} />
          })}
        </main>
          </>
    )

}

export default MyCarIndex