import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import CarNew from "../pages/CarNew"

describe("<CarNew />", () => {
  const renderNew = () => {
    render(
        <BrowserRouter>
            <CarNew />
        </BrowserRouter>
    )
}
  it("renders without crashing", () => {
    renderNew()
  })
  it("renders a new car form", () => {
    renderNew()
    
    const yearInput = screen.getByLabelText("Year", {
      name: /year/i 
    })
    expect(yearInput).toBeInTheDocument()

    const makeInput = screen.getByLabelText("Make", {
      name: /make/i
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