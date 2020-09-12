import React, { Component } from 'react'
import {connect} from 'react-redux'

 class Home extends Component {
    constructor(){
        super()
        this.state={
       }
    }
    componentDidMount(){
        console.log('home page')
    }

    render() {
        return (
            <div>
                Home
                
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        login : state.login
    }
}

export default connect(mapStateToProps)(Home)