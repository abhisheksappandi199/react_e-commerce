import React, { Component } from 'react'
import HeaderComponent from './components/Header/Header.js'
import Routes from './components/Routes/Routes'
import './App.css'

class App extends Component {
    render() {
        return (
            <div>
              <Routes/>
            </div>
        )
    }
}
export default App