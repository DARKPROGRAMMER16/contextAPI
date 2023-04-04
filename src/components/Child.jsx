import React, { useContext } from 'react'
import Grandchild from './Grandchild'
import { AppContext } from '../global/DataProvider'

const Child = () => {

    const {data3, finc} = useContext(AppContext)
  return (
    
    <>
        <h3>Child component</h3>
        <p>{data3.city}</p>
        <Grandchild />
    </>
  )
}

export default Child