import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment } from '../actions/countAction'

 class btn extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{this.props.dispatch(increment())}}>increment</button>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return { 
        count : state.count
    }
} 

export default connect(mapStateToProps)(btn)