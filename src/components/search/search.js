import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './style.css';

export default function Search() {

    const dispatch = useDispatch();
    const filterName = useSelector((state) => state.filterName)
    const [inputValue, setInputValue] = useState(filterName || "");


    function filterCountriesByName(name) {
        setInputValue(name)
        dispatch({
            type: "FILTER_COUNTRY_BY_NAME",
            payload: name
        })
    }

    return (
        <div className="search-input">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search for a country..." value={inputValue} onChange={(e) => { filterCountriesByName(e.target.value) }} />
        </div>
    )
} 