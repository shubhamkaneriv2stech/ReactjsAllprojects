import React, { createContext } from 'react'
import ComponentB from './ComponentB'

const BioData = createContext();
const ComponentA = () => {
    return (
        <BioData.Provider value={"Shubham"}>
        <ComponentB/>
        </BioData.Provider>
    )
}

export default ComponentA
export {BioData}