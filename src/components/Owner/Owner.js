import React, { Component } from 'react'
import { Tabs } from 'antd'
import './owner.css'
import Product from './Product'
import TotalOrders from './TotalOrders'

const {TabPane} = Tabs

export default class Owner extends Component {
    hanldeAdminLogout = () =>{
        localStorage.clear()
        this.props.history.push('/')
    }
    render() {
        return (
                <div className="card-container">
                    <button onClick={this.hanldeAdminLogout}>logout</button>
                    <Tabs type="card">
                    <TabPane tab="Create Product" key="1">
                        <Product/>
                    </TabPane>
                    <TabPane tab="Total Orders" key="2">
                        <TotalOrders/>
                    </TabPane>
                    <TabPane tab="Tab Title 3" key="3">
                        
                    </TabPane>
                    </Tabs>
                    
                </div>
        )
    }
}
