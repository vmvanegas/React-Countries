import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './style.css';

export default function Search() {

    const dispatch = useDispatch();   
    const filterName = useSelector((state) => state.filterName)
    const filterRegion = useSelector((state) => state.filterRegion)
    const options = [
        {
            name: "Unfiltered",
            value: ""
        },
        {
            name: "Africa",
            value: "Africa"
        },
        {
            name: "America",
            value: "Americas"
        },
        {
            name: "Asia",
            value: "Asia"
        },
        {
            name: "Europe",
            value: "Europe"
        },
        {
            name: "Oceania",
            value: "Oceania"
        },
    ]
    const [currentSelectValue, setCurrentSelectValue] = useState(filterRegion || "Filter by region");

    useEffect(()=>{
        closeSelectEventListener()
    },[])

    function filterCountriesByRegion({name, value}){
        setCurrentSelectValue(name)        
        dispatch({
            type: "FILTER_COUNTRY_BY_REGION",
            payload: value
        })

        dispatch({
            type: "FILTER_COUNTRY_BY_NAME",
            payload: filterName
        })
    }
    function closeSelectEventListener(){
        let options = document.querySelector(".custom-options")
        let select = document.querySelector(".custom-select")
        window.addEventListener("click", (e)=>{
            if(e.target !== select){
                options.classList.remove("show-select-options")
            } else {
                options.classList.toggle("show-select-options")
            }
        })
    }

    return (
        <React.Fragment>
        <div className="custom-select-wrapper">
            <div className="custom-select">
                <div className="custom-select-trigger">
                    <span>{currentSelectValue}</span>
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>
            <div className="custom-options">
                {
                    options.map((option, index)=>(
                        <span key={index} onClick={()=>{filterCountriesByRegion(option)}}>{option.name}</span>
                    ))
                }
            </div>
        </div>
        </React.Fragment>
    )
} 