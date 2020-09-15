import React, { useEffect, useState } from 'react';
import CountryCard from '../countryCard/countryCard';
import { useDispatch, useSelector } from 'react-redux'
import Search from '../search/search'
import FilterByRegion from '../filterByRegion/filterByRegion'
import './style.css';

export default function CountriesList() {

    const dispatch = useDispatch();
    const filterName = useSelector((state) => state.filterName)
    const filterRegion = useSelector((state) => state.filterRegion)
    const countryList = useSelector((state) => 
    {
        if(filterName !== ""){
            return state.countryListByName
        }

        if(filterRegion !== ""){
            return state.countryListByRegion
        }

        return state.countryList
    })
    const [error, setError] = useState(false);
    const [isLoaded, setIsloaded] = useState(false);

    const countriesUrl = "https://restcountries.eu/rest/v2/";

    useEffect(() => {
        getCountries();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function getCountries() {
        let countriesURL = `${countriesUrl}`
        fetch(countriesURL)
            .then(response => response.json())
            .then((data) => {
                if (data.status !== 404 && data.status !== 400) {
                    setError(false);
                    setIsloaded(true);
                    dispatch({
                        type: "SET_COUNTRY_LIST",
                        payload: data
                    })
                } else {
                    setError(true);
                }
            }).catch(error => { console.log(error) });
    }


    if(isLoaded){
        return (
            <section className="countries-list">
                <div className="container">
                    <div className="search">
                            <Search />
                            <FilterByRegion />
                    </div>
    
                    {countryList && <div className="cards-grid">{                  
    
                        countryList.map((country, index) =>
                        <CountryCard country={country} key={index} />)        
    
                    }</div>}
                </div>
                {countryList.length === 0 && <h2 className="not-found">Country not found</h2>}
            </section>
        )
    } else {
        return (
            <h2 className="not-found">Loading...</h2>
        )
    }

   
} 