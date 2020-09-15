import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './index.css';
import Navigation from './components/navigation/navigation';
import CountriesList from './components/countriesList/countriesList';
import DetailView from './components/detailView/detailView'
import { Provider } from 'react-redux'
import store from './redux/reducer'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/countries-list" component={CountriesList} />
          <Route path="/countries-list/:code" component={DetailView} />          
          <Redirect from="/" to="/countries-list" />          
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
