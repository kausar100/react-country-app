import { React, useState, useEffect } from 'react'

import './searchCountries.module.css'

const SearchCountries = (props) => {

    const [searchText, setsearchText] = useState("");

    const handleInput = (e) => {
        setsearchText(e.target.value)
    }

    useEffect(() => {
        props.onSearch(searchText);
    }, [searchText])


    return (
        <div>
            <input type='text'
                placeHolder='Search Country'
                value={searchText}
                onChange={handleInput}>

            </input>
        </div>
    )
}

export default SearchCountries