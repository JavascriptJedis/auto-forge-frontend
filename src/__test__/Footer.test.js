import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Footer from "../components/Footer"

describe("<Footer />", () => {
    const renderComponent = () => {
       render (
       <BrowserRouter>
            <Footer />
        </BrowserRouter>)
       
}
    it("renders without crashing", () => {
        renderComponent()
    })
    it("renders a div with a specific class", () => {
        renderComponent()
        const footerDiv = screen.getByText(/Jackson, Jonathan, Jean, Justin/i)
        
        expect(footerDiv).toBeInTheDocument()
    })
})