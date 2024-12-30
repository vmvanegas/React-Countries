import { createStore } from 'redux'


const initialState = {
    countryList: [],
    countryListByName: [],
    countryListByRegion: [],
    filterRegion: "",
    filterName: ""
  }
  
  function reducer(state, action) {
    switch (action.type) {
      
      case "SET_COUNTRY_LIST": {
        return { ...state, countryList: action.payload }
      }

      case "FILTER_COUNTRY_BY_NAME": {
        let countryListByName
        if (state.filterRegion !== "") {
          countryListByName = state.countryListByRegion.filter((country) => {
            return country.name.common.toLowerCase().includes(action.payload.toLowerCase())
            }
          )
        } else {
          countryListByName = state.countryList.filter((country) => {
            return country.name.common.toLowerCase().includes(action.payload.toLowerCase())
            }
          )
        }        
        return { ...state, countryListByName, filterName: action.payload}
      }

      case "FILTER_COUNTRY_BY_REGION": {  
          let countryListByRegion = state.countryList.filter((country) => {
            return country.region === action.payload
            }
          )  
        return { ...state, countryListByRegion, filterRegion: action.payload }
      }

      default: {
        return state
      }
    }
  }
  
const store = createStore(reducer, initialState)
export default store;