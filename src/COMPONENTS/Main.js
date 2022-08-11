import { React, useState, useEffect } from 'react'
import Countries from './Countries'

import css from './main.module.css'

const Main = () => {

    const [data, setdata] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [error, seterror] = useState(null);

    const getData = async (url) => {
        try {

            const countryData = await fetch(url);
            const parseData = await countryData.json();
            setdata(parseData);
            setisLoading(false);
        } catch (err) {
            seterror(err.message);
            setdata(null);
            setisLoading(false);
        }

    }

    useEffect(() => {

        getData("https://restcountries.com/v3.1/all");


    }, [])

    return (
        <div className={css['country-container']}>
            <h1>Country App</h1>
            {error != null && <p>{error}</p>}
            {isLoading && <p>Data is Loading. Please Wait...</p>}
            <Countries countries={data} />
        </div>
    )
}

export default Main