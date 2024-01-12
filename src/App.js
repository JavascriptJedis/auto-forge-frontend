import "./App.css";
import CarIndex from "./pages/CarIndex";
import CarShow from "./pages/CarShow";
import CarEdit from "./pages/CarEdit";
import About from "./pages/About";
import CarNew from "./pages/CarNew";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import mockCars from "./MockCars";
import users from "./MockUsers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MyCarIndex from "./pages/MyCarIndex"

function App() {

  const [cars ,setCars] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser))
    }
    readCars()
  }, [])
  // CRUD functionality fetch calls


  const url = "http://localhost:3000/"
  
  const readCars = () => {
    fetch(`http://localhost:3000/cars`) // this is the request
      .then((response) => response.json()) //converts JSON to data we can use in JS
      .then((payload) => {
        setCars(payload)
      })
      .catch((error) => console.log("Car read errors:", error))
  }


  const createCar = (car) => {
    fetch("http://localhost:3000/cars", {
      // converts the object to a string that can be passed in the request
      body: JSON.stringify(car),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      }, 
      // HTTP verb so the correct endpoint is invoked on the server
      method: "POST"
    })
    .then((response) => response.json())
    .then(() => readCars())
    .catch((errors) => console.log("Car create errors:", errors))
  }

  const updateCar = (car, id) => {
    fetch(`http://localhost:3000/cars/${id}`, {
    // converting an object to a string
    body: JSON.stringify(car),
    // specify the info being sent in JSON and the info returning should be JSON
    headers: {
      "Content-Type": "application/json"
    },
    // HTTP verb so the correct endpoint is invoked on the server
    method: "PATCH"
  })
    .then((response) => response.json())
    .then(() => readCars())
    .catch((errors) => console.log("Car update errors:", errors))
  }

  const deleteCar = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this project?")
    if (confirmDelete) {
      fetch(`http://localhost:3000/cars/${id}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
  })
    .then((response) => response.json())
    .then(() => readCars())
    .catch((errors) => console.log("delete errors:", errors))}
  }
  const login =(userInfo) => {
    fetch(`${url}login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      // stores token in browser using local storage
      localStorage.setItem("token", response.headers.get("Authorization"))
      return response.json()
    })
    .then((payload) => {
      localStorage.setItem("user", JSON.stringify(payload))
      setCurrentUser(payload)
    })
    .catch((error) => console.log("signup errors:", error))
  }

  const signup = (userInfo) => {
    fetch(`${url}signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      // stores token in browser using local storage
      localStorage.setItem("token", response.headers.get("Authorization"))
      return response.json()
    })
    .then((payload) => {
      localStorage.setItem("user", JSON.stringify(payload))
      setCurrentUser(payload)
    })
    .catch((error) => console.log("signup errors:", error))
  }


  const logout = () => {
    fetch(`${url}logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"), //retrieve token
      },
      method: "DELETE",
    })
      .then((payload) => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setCurrentUser(null)
      })
      .catch((error) => console.log("log out errors: ", error))

  }

  return (
    <div className="main-container">
      <Navbar currentUser={currentUser} logout={logout} />
      <br/>
      <div className="routes-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login login={login}/>} />
        <Route path="/signup" element={<Signup signup={signup} />} />
        <Route path="/carindex" element={<CarIndex cars={cars} />} />
        <Route path="/carshow/:id" element={<CarShow cars={cars} deleteCar={deleteCar} currentUser={currentUser} />} />
        <Route path="/about" element={<About />} />
        {
          <>
        currentUser && (
          <Route path="/mycarindex/" element={<MyCarIndex cars={cars} currentUser={currentUser}/>} />
          <Route path="/carnew" element={<CarNew createCar={createCar} currentUser={currentUser}/>} />
        <Route path="/caredit/:id" element={<CarEdit cars={cars} updateCar={updateCar} currentUser={currentUser}/>} />
        )
</>
}
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <br/>
      <Footer />
    </div>
  );
}

export default App;
