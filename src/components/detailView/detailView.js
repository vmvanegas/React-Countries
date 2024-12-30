import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
// Components
import NumberFormat from 'react-number-format'
import Loading from '../loading/loading'
// Styles
import './style.css'


export default function DetailView() {

    let { code } = useParams();
    const countryURL = "https://restcountries.com/v3.1/alpha/";
    const history = useHistory();

    const [country, setCountry] = useState({});
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        const getCountry = async()=>{
            
            await fetch(`${countryURL}${code.toLowerCase()}`)
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                if (data.status !== 404) {
                    setCountry(data[0]);
                    setLoaded(true);
                } else {
                }
            })
        }
        getCountry()
    }, [code, countryURL]);

    const getArrayWithCommas = (array) =>{   
        return Object.keys(array)
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
                            <img src={country.flags.svg} alt={country.flags.alt}/>
                        </div>
                        <div className="country-info">
                            <div className="info-wrapper">
                                <div className="title">
                                    <h2>{country.name.common}</h2>
                                </div>
                                <div className="info">
                                    <div className="left-info">
                                        <ul>
                                            <li><b>Native name:</b> {country.name.common}</li>
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
                                            <li><b>Top level domains:</b> {country.tld}</li>
                                            <li><b>Currencies: </b>
                                                {Object.keys(country.currencies)}
                                            </li>
                                            <li><b>Languages: </b>
                                                {Object.values(country.languages)}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bottom-info">
                                    <b>Border countries: </b>
                                    {country.borders?.map((item, index) => (
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
            <Loading />
        )
    }

}