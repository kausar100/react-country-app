import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import Country from './Country'
import './countries.module.css';


const Countries = (props) => {
  return (
    <section>
      
      {
        props.countries.map((country) => {
          const newCountry   = {country, id: uuidv4()}; 
          return <Country key={newCountry.id} {...newCountry} deleteItem={props.deleteItem} />
        })}

    </section>
  )
}

export default Countries