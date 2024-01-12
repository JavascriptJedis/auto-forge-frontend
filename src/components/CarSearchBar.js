import React, { useState } from "react";
import './CarSearchBar.css'

const CarSearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleInputChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        onSearch(newQuery); // Trigger search on each input change
    }

    const handleSearch = () => {
    onSearch(query);
    }

    return (
    <div  className="search-bar">
    <input className="search-bar-input"
        type="text"
        placeholder="Search by make, model or project"
        value={query}
        onChange={handleInputChange}
    />
    {/* <button onClick={handleSearch}>Search</button> */}
    </div>
);
};

export default CarSearchBar;
