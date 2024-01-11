import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Navbar from "../components/Navbar"


describe("<Navbar />", () => {
    const render = () => {
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    }


    it("renders without crashing", () => {
        render()
    })
    
    it("has clickable links", () => {
        render()
        const aboutElement = screen.queryByText((content, element) =>{
            return element.textContent === "About"
        })
    })
    expect(screen.queryByText("About")).toBeInTheDocument
    
        const indexElement = screen.queryByText((content, element) =>{
            return element.textContent === "Index"
    })
    expect(screen.queryByText("Index")).toBeInTheDocument

        const newCarElement = screen.queryByText((content, element) =>{
            return element.textContent === "New Car"
    })
    expect(screen.queryByText("New Car")).toBeInTheDocument

        const logoutElement = screen.queryByText((content, element) =>{
            return element.textContent === "Logout"
    })
    expect(screen.queryByText("Logout")).toBeInTheDocument
})

