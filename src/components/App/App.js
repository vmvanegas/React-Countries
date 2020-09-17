import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Navigation from '../navigation/navigation';
import CountriesList from '../countriesList/countriesList';
import DetailView from '../detailView/detailView'
import { Provider } from 'react-redux'
import store from '../../redux/reducer'

function App() {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <Navigation />
                    <Switch>
                        <Route exact path="/React-Countries" component={CountriesList} />
                        <Route path="/React-Countries/:code" component={DetailView} />
                        <Redirect from="/" to="/React-Countries" />
                    </Switch>
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    )
}

export default App;