import React from 'react'
import { useState } from 'react'
import Classcomp from './Classcomp'
import Functional from './Functional'
import './styles.css'

const Preview = () => {
    const [funct, setfunct] = useState(false)
    const [comp, setcomp] = useState(false)
    
    return (
    <>
    <h1 className='head'>Styling using Functional and Classcomponent</h1>
    <button className='but1' onClick={()=>funct?setfunct(false):setfunct(true)}>To see styling in Functional Component</button>
    <button className='but2' onClick={()=>comp?setcomp(false):setcomp(true)}>To see styling in Classcomponent</button>
    
    {funct&&<Functional/>}
    {comp&&<Classcomp/>}

    </>
  )
}

export default Preview