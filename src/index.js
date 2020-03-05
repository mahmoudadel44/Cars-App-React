
import React from 'react'
import  ReactDOM from 'react-dom'
import {BrowserRouter,Route} from 'react-router-dom' 
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import PromiseRedux from 'redux-promise'
import reducers from './reducers'
import App from './components/App'
import car from './containers/car'
import './App.css'
import './css/bootstrap.min.css'
import './css/footerstyle.css'
const createStoreWithAppltMiddleware=applyMiddleware(PromiseRedux)(createStore)
ReactDOM.render(
    <Provider store={createStoreWithAppltMiddleware(reducers)}>
   <BrowserRouter>
<Route exact path="/" component={App}></Route>
<Route exact path="/car/:id" component={car}></Route>
</BrowserRouter>
</Provider>
    ,document.querySelector('#root'))