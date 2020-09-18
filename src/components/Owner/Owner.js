import React, { Component } from 'react'
import { Tabs } from 'antd'
import './owner.css'
import Product from './Product'
import File from './File'

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
                    <TabPane tab="carosal img_upload" key="2">
                        <File/>
                    </TabPane>
                    <TabPane tab="Tab Title 3" key="3">
                        
                    </TabPane>
                    </Tabs>
                    
                </div>
        )
    }
}
