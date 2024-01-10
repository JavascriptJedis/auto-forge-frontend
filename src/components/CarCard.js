import { Link } from "react-router-dom";
import './CarCard.css'

const CarCard = ({car, index}) => {

    return (
        <>
        <div className="card-container">
          <div className="card-image-container">
            <img src={car.image} alt={`picture of ${car.model}`} />
          </div>
          <div className="card-text-container">
            <h2>
              Make: {car.make}
            </h2>
            <h2>
              Model: {car.model}
            </h2>
            <div>
              <p>
                <span>Project Preview:</span> 
                <br />
                {car.description} 
              </p>
              <div className="card-text-button-container">
                <Link to={`/carshow/${car.id}`}>
                  <button>Click to See More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default CarCard
