import {  render } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import CarShow from "../pages/CarShow"


describe('<CarShow />', () => {
  it('renders car details correctly', () => {
    const cars = [
      { id: 1, year: 1992, make: 'Mazda', model: 'Miata', color: 'White', miles: 99000, cost: 60, description: 'Replaced shift knob to not feel the cold metal during the winter' },
      
    ]

    const { getByText } = render(
      <MemoryRouter initialEntries={['/car/1']}>
      <Routes>
        <Route path="/car/:id" element={<CarShow cars={cars} />}  />     
      </Routes>
      </MemoryRouter>
    )

    expect(getByText(/1992/)).toBeInTheDocument()

    expect(getByText(/Mazda/i)).toBeInTheDocument()

    expect(getByText(/Miata/i)).toBeInTheDocument()

    expect(getByText(/White/i)).toBeInTheDocument()

    expect(getByText(/99000/)).toBeInTheDocument()

    expect(getByText(/60/)).toBeInTheDocument()

    expect(getByText(/Replaced shift knob to not feel the cold metal during the winter/i)).toBeInTheDocument()
  })
})


  
    
  