import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

const CarEdit = ({ cars, updateCar, currentUser }) => {

  const navigate = useNavigate()


  const { id } = useParams()
  let currentCar = cars?.find((car) => car.id === +id)

  const [editCar, setEditCar] = useState({
    year: currentCar.year,
    make: currentCar.make, 
    model: currentCar.model, 
    color: currentCar.color,
    miles: currentCar.miles,
    image: currentCar.image,
    cost: currentCar.cost,
    description: currentCar.description,
    user_id: currentUser.id
  })

  const handleChange = (e) => {
    setEditCar({...editCar, [e.target.name]: e.target.value})
  }


  const handleSumbit = () => {
    updateCar(editCar, currentCar.id)
    navigate("/carindex")
  }

  return (
    <div className='car-edit-container'>
      <Form>
        <FormGroup>
          <Label for='year'>Year</Label>
          <Input onChange={handleChange} id='year' value={editCar.year} type='text' name='year'/>
        </FormGroup>
        <FormGroup>
          <Label for='make'>Make</Label>
          <Input onChange={handleChange} id='make'value={editCar.make} type='text' name='make'/>
        </FormGroup>
        <FormGroup>
          <Label for='model'>Model</Label>
          <Input onChange={handleChange} id='model' value={editCar.model} type='text' name='model'/>
        </FormGroup>
        <FormGroup>
          <Label for='color'>Color</Label>
          <Input onChange={handleChange} id='color' value={editCar.color} type='text' name='color'/>
        </FormGroup>
        <FormGroup>
          <Label for='miles'>Miles</Label>
          <Input onChange={handleChange} id='miles' value={editCar.miles} type='text' name='miles'/>
        </FormGroup>
        <FormGroup>
          <Label for='image'>Image</Label>
          <Input onChange={handleChange} id='image' value={editCar.image} type='text' name='image'/>
        </FormGroup>
        <FormGroup>
          <Label for='cost'>Cost</Label>
          <Input onChange={handleChange} id='cost' value={editCar.cost} type='text' name='cost'/>
        </FormGroup>
        <FormGroup>
          <Label for='description'>Description</Label>
          <Input onChange={handleChange} id='description' value={editCar.description} type='text' name='description'/>
        </FormGroup>
        <Button onClick={handleSumbit} name="update">Update</Button>
      </Form>
    </div>
      
  )
}

export default CarEdit