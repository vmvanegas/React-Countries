import React from 'react';
import { useDispatch } from 'react-redux'
import './style.css';

export default function Search() {

    const dispatch = useDispatch();


    function filterCountriesByName(name) {
        dispatch({
            type: "FILTER_COUNTRY_BY_NAME",
            payload: name
        })
    }

    return (
        <div className="search-input">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search for a country..." onChange={(e) => { filterCountriesByName(e.target.value) }} />
        </div>
    )
} 