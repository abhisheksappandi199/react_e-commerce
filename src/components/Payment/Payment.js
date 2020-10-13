import React, { useState , useEffect } from 'react'
import {startRemoveCart} from '../../actions/cartAction'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {startGetCart} from '../../actions/cartAction'
import {startAddOrders} from '../../actions/myorderAction'

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const __DEV__ = document.domain === 'localhost'

function Payment(props) {
	const [name, setName] = useState('Mehul')

	useEffect(() => {
		props.dispatch(startGetCart())
	  }, [])

	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch(`http://localhost:3333/razorpay/${props.bill_id}`, { method: 'POST' }).then((t) =>
			t.json()
		)

		console.log("this the data : ",data)

		const options = {
			key: 'rzp_test_6FWcmU32U1iLtf' ,
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
			image: 'http://localhost:1337/logo.svg',
			handler: function (response) {
				// alert(response.razorpay_payment_id)
				// alert(response.razorpay_order_id)
				// alert(response.razorpay_signature)
				console.log("came from payment" ,response);
				if(response){
					const redirect = () =>{
						return props.history.push('/home')
					}
					props.dispatch(startRemoveCart(props.cart[0]._id))
					const obj = {}
					obj.razorpay_payment_id = response.razorpay_payment_id
					obj.razorpay_order_id = response.razorpay_order_id
					props.dispatch(startAddOrders(props.bill[0]._id , obj ,redirect))
				}
			},
			prefill: {
				name,
				email: 'sdfdsjfh2@ndsfdf.com',
				phone_number: '9899999999'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

	return (
		<div className="App">{console.log("props",props)}
			<header className="App-header">
        <button> 
          <a
            className="App-link"
            onClick={displayRazorpay}
            target="_blank"
            rel="noopener noreferrer"
          >
          Pay Now
          </a>
        </button>
			</header>
		</div>
	)
}
const mapStateToProps = (state) =>{
    return {
		cart : state.cart ,
		bill : state.bill
    }
}
export default withRouter(connect(mapStateToProps)(Payment))

