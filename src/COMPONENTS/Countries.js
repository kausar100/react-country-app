import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import Country from './Country'
import './countries.module.css';


const Countries = (props) => {
  return (
    <section>
      
      {
        props.countries.map((country) => {
          return <Country key={uuidv4()} data={country} deleteItem={props.deleteItem} />
        })}

    </section>
  )
}

export default Countries