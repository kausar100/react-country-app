import { React, useState, useEffect } from 'react'
import Countries from './Countries'

import css from './main.module.css'
import SearchCountries from './SearchCountries';

const Main = () => {

    const [countries, setcountries] = useState([]); //main
    const [filterCountries, setfilterCountries] = useState([]); //for use
    const [isLoading, setisLoading] = useState(null);
    const [error, seterror] = useState(null);

    const getData = async (url) => {
        try {
            setisLoading(true);
            const countryData = await fetch(url);
            const data = await countryData.json();
            setcountries(data);
            setfilterCountries(data);

            setisLoading(false);
            seterror(null);

        } catch (err) {
            setisLoading(false);

            seterror("Data fetching is not successfully done.");

        }

    }

    useEffect(() => {

        getData("https://restcountries.com/v3.1/all");

    }, [])

    const deleteCountry = (name) => {
        const filterdata = countries.filter((country) => {
            return country.name.common !== name;
        });

        setfilterCountries(filterdata);
        // alert(name);

    }

    const searchCountries = (searchValue) => {
        const inputText = searchValue.toLowerCase();
        // alert(inputText);

        const filterdata = countries.filter((country) => {
            const countryName = country.name.common.toLowerCase();
            return countryName.startsWith(inputText);
        });

        setfilterCountries(filterdata);

    }

    return (

        <div className={css['country-container']}>
            <h1>Country App</h1>
            <SearchCountries onSearch={searchCountries} />

            <span>{isLoading && <p>Data is Loading. Please Wait...</p>}</span>
            <span>{error != null && <p>{error}</p>}</span>

            {countries && <Countries countries={filterCountries} deleteItem={deleteCountry} />}
        </div>
    )
}

export default Main