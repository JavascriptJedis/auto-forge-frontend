import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import mockCars from "../MockCars"
import CarEdit from "../pages/CarEdit"


const renderEdit = () => {
    render(
        <MemoryRouter initialEntries={["/caredit/1"]}>
            <Routes>
                <Route path="/caredit/:id" element={<CarEdit cars={mockCars} />} />
            </Routes>
        </MemoryRouter>
    )
}

describe("<CarEdit />", () => {
    it("displays a form to update project info", () => {
        renderEdit()
        const yearInput = screen.getByLabelText("Year", {
            year: /year/i, 
        })
        expect(yearInput).toBeInTheDocument()

        const makeInput = screen.getByLabelText("Make", {
            make: /make/i
        })
        expect(makeInput).toBeInTheDocument()

        const modelInput = screen.getByLabelText("Model", {
            name: /model/i
          })
        expect(modelInput).toBeInTheDocument()

        const colorInput = screen.getByLabelText("Color", {
            name: /color/i
          })
        expect(colorInput).toBeInTheDocument()
          
          const milesInput = screen.getByLabelText("Miles", {
            name: /miles/i
          })
        expect(milesInput).toBeInTheDocument()    

        const imageInput = screen.getByLabelText("Image", {
            name: /image/i
          })
          expect(imageInput).toBeInTheDocument()
      
          const costInput = screen.getByLabelText("Cost", {
            name: /cost/i
          })
          expect(costInput).toBeInTheDocument()
      
          const descriptionInput = screen.getByLabelText("Description", {
            name: /description/i
          })
          expect(descriptionInput).toBeInTheDocument()
    })
})