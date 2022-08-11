import React from 'react'

import css from './country.module.css';

const Country = (props) => {

  const { name, capital, flags, area, population, region } = props.data;

  const removeCountry = (countryName) => {
    props.deleteItem(countryName);
  }

  return (
    <article>
      <div className={css.container}>
        <img className={css.flag} src={flags.png} alt={name.common} />
        <p>Name : {name.common}</p>
        <p>Capital : {capital}</p>
        <p>Population : {population}</p>
        <p>Area :  {area}</p>
        <p>Region : {region}</p>
        <button className={css.btn} onClick={() => removeCountry(name.common)}>Remove</button>
      </div>

    </article>
  )
}

export default Country