import React,{useContext} from 'react'
import { Container } from 'react-bootstrap'
import { BioData } from './ComponentA'
const ComponentC = () => {
    const name= useContext(BioData)

    return (
        <Container   className="text-center"
            style={{ marginTop: "230px", padding: "40px" }}>
            Component c{name}
        </Container>
    )
}

export default ComponentC
