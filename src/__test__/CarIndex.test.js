import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import cars from "../MockCars"
import CarIndex from "../pages/CarIndex"




describe("<CarIndex />", () => {
  const renderNew = () => {
    render(
        <BrowserRouter>
            <CarIndex cars={cars} />
        </BrowserRouter>
    )
}
  it("renders without crashing", () => {})
  renderNew()
  cars.forEach((car) => {

    const carModel = screen.getByText(car.model)
    expect(carModel).toBeInTheDocument()

    const carMake = screen.getByText(car.make)
    expect(carMake).toBeInTheDocument()

  })

  it("renders car cards", () => {
    render()
  })
})

  
