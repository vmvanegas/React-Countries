import React from 'react';
import './style.css';
import { useHistory } from "react-router-dom";
import NumberFormat from 'react-number-format'




export default function CountryCard(props) {

    const country = props.country
    let history = useHistory();

    function seeDetails(country) {
        history.push(`/React-Countries/${country.alpha3Code}`);
    }

    return (
        <div className="countries-card" onClick={() => { seeDetails(country) }}>
            <img loading="lazy" src={country.flag} alt={country.name}/>
            <div className="card-description">
                <h2>{country.name}</h2>
                <ul className="card-info">
                    <li>
                        <b>Population: </b>
                        <NumberFormat value={country.population} displayType={'text'} thousandSeparator={true} renderText={value => <span> {value}</span>} />
                    </li>
                    <li>
                        <b>Region: </b>
                        {country.region}
                    </li>
                    <li>
                        <b>Capital: </b>
                        {country.capital}
                    </li>
                </ul>
            </div>
        </div>
    )
} 