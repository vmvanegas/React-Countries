import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import NumberFormat from 'react-number-format'
import './style.css'


export default function DetailView() {

    let { code } = useParams();
    const countryURL = "https://restcountries.eu/rest/v2/alpha/";
    const history = useHistory();

    const [country, setCountry] = useState({});
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch(`${countryURL}${code}`)
            .then(response => response.json())
            .then((data) => {
                if (data.status !== 404) {
                    setCountry(data);
                    console.log(data);
                    setLoaded(true);
                } else {
                }
            })
    }, [code, countryURL]);

    const getArrayWithCommas = (array) =>{
        let listNames = [];
        listNames = array.map(item=>item.name)        
        return listNames.join(", ");
    }

    if (isLoaded) {
        return (
            <section className="detail-view">
                <div className="container">
                    <div className="back-btn">
                        <button onClick={()=>{history.goBack()}}><i className="fas fa-long-arrow-alt-left"></i>Back</button>
                    </div>
                    <div className="detail-wrapper">
                        <div className="country-img">
                            <img src={country.flag} alt={country.name}/>
                        </div>
                        <div className="country-info">
                            <div className="info-wrapper">
                                <div className="title">
                                    <h2>{country.name}</h2>
                                </div>
                                <div className="info">
                                    <div className="left-info">
                                        <ul>
                                            <li><b>Native name:</b> {country.nativeName}</li>
                                            <li><b>Population: </b>
                                                <NumberFormat value={country.population} displayType={'text'} thousandSeparator={true} renderText={value => <span> {value}</span>} />
                                            </li>
                                            <li><b>Region:</b> {country.region}</li>
                                            <li><b>Subregion:</b> {country.subregion}</li>
                                            <li><b>Capital:</b> {country.capital}</li>
                                        </ul>
                                    </div>
                                    <div className="right-info">
                                        <ul>
                                            <li><b>Top level domains:</b> {country.topLevelDomain}</li>
                                            <li><b>Currencies: </b>
                                                {getArrayWithCommas(country["currencies"])}
                                            </li>
                                            <li><b>Languages: </b>
                                                {getArrayWithCommas(country["languages"])}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bottom-info">
                                    <b>Border countries: </b>
                                    {country["borders"].map((item, index) => (
                                        <label className="chip" key={index}>{item}</label>
                                    ))}                                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <div className="detail-view">
                <div className="container">
                    <h2>Loading...</h2>
                </div>
            </div>
        )
    }

}