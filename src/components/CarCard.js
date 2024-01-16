import { Link } from "react-router-dom";
import "./CarCard.css";

const CarCard = ({ car, index }) => {
  return (
    <>
      <div className="card-container">
        <div className="card-image-container">
          <img src={car.image} alt={`picture of ${car.model}`} />
        </div>
        <div className="card-text-container">
          <div className="card-text-padding-container">
            <h5>
              <b>Make:</b> <br /> <span>{car.make}</span>
            </h5>
            <h5>
              <b>Model:</b> <br /> <span>{car.model}</span>
            </h5>
            <div className="card-text-desc-container">
              <div className="card-divider" />
              <p>
                <span>
                  <b>Project Preview:</b>
                </span>
                <br />
                {car.description}
              </p>
              <div className="card-text-button-container">
                <Link to={`/carshow/${car.id}`}>
                  <button>Click for Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarCard;
