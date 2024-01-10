import { Link } from "react-router-dom";

const CarCard = ({car, index}) => {

    return (
        <>
        <div className="card">
          <div className="picture">
            <img className="all-pictures" src={car.image} alt={`picture of ${car.model}`} />
          </div>
          <div className="car-make">
            {car.make}
          </div>
          <div className="car-model">
            {car.model}
          </div>
          <Link to={`/carshow/${car.id}`}>
          <button className="card-btn">Details</button>
        </Link>
        </div>
      </>
    )
}

export default CarCard