import React, { Component } from 'react'
import Search from '../containers/search'
import ListCars from '../containers/list_cars'
import Footer from '../containers/Footer'
import Note from './note'
class App extends Component {
    render() {
        return (
            <div>
            <Search/>
            <Note/>
            <ListCars/>
            <Footer/>
            </div>
        )
    }
}
export default  App
