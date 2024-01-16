import React, { useState } from "react";
import CarCard from "../components/CarCard";
import "./CarIndex.css";
import CarSearchBar from "../components/CarSearchBar";

const CarIndex = ({ cars, currentUser }) => {
  const [searchResults, setSearchResults] = useState(cars);

  const handleSearch = (query) => {
    if (cars) {
      // Convert the query to lowercase for case-insensitive search
      const lowerCaseQuery = query.toLowerCase();

      // Filter cars based on the search query
      const matchingCars = cars.filter((car) => {
        const carMake = car && car.make ? car.make.toLowerCase() : "";
        const carModel = car && car.model ? car.model.toLowerCase() : "";
        const carDescription =
          car && car.description ? car.description.toLowerCase() : "";

        return (
          carMake.includes(lowerCaseQuery) ||
          carModel.includes(lowerCaseQuery) ||
          carDescription.includes(lowerCaseQuery)
        );
      });

      setSearchResults(matchingCars);
    }
  };

  return (
    <>
      <main>
        <CarSearchBar onSearch={handleSearch} />
        <div className="index-container">
          <div className="index-card-container">
            {searchResults.length > 0 ? (
              searchResults.map((car, index) => (
                <CarCard key={index} car={car} currentUser={currentUser} />
              ))
            ) : (
              <p>No matching cars found</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default CarIndex;