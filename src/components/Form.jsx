import styled from "styled-components";
import { initialForm } from "./initialForm";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [formData, setFormData] = useState(initialForm)
    

    const handleChange = (e) => {
        if (e.target.type === "checkbox" ) {
        setFormData({
            ...formData,
            checkbox: e.target.checked 
        })
        } else {
// regular
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
        }
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        navigate(`/details/${JSON.stringify(formData)}`)
    }

    return (
        <Container>
            <FormContainer onSubmit={handleSubmit}>
                <h2>Patient Details</h2>
                <Required><Req>*</Req>required</Required>
                <Input required type="text" name="firstName" placeholder="First name" onChange={handleChange}/>
                <Input type="text" name="lastName" placeholder="Last name" onChange={handleChange}/>
                <Input type="text" name="dob" placeholder="Date of Birth" onChange={handleChange}/>
                <Input type="text" name="sex" placeholder="Sex" onChange={handleChange}/>
                <Input type="text" name="address" placeholder="Street" onChange={handleChange}/>
                <Input type="text" name="address" placeholder="City" onChange={handleChange}/>
                <Input type="text" name="address" placeholder="State" onChange={handleChange}/>
                <Input type="text" name="address" placeholder="Zipcode" onChange={handleChange}/>
                <label htmlFor="tos">tos</label>
                <input type="checkbox" onChange={handleChange} />
                <Input type="submit" />
            </FormContainer>
        </Container>
    );
}

export default Form;

const Container = styled.div `
    display: flex;
    justify-content: center;
    margin: 5rem;
    padding: 2rem;
    border: 2px solid black;
    border-radius: 25px;
`

const FormContainer = styled.form `
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Input = styled.input `
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
`
const Required = styled.p`
    padding: 1px;
`
const Req = styled.span `
    color: red;
`