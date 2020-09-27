import React, { useState } from 'react'
import {connect} from 'react-redux'

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

	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch(`http://localhost:3333/razorpay/${props.id}`, { method: 'POST' }).then((t) =>
			t.json()
		)

		console.log("thi sis the data : ",data)

		const options = {
			key: 'rzp_test_6FWcmU32U1iLtf' ,
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
			image: 'http://localhost:1337/logo.svg',
			handler: function (response) {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
				console.log(response);
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
		<div className="App">
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
export default Payment
// const mapStateToProps = (state) =>{
//   return {
//       bill : state.bill ,
//       products : state.products 
//   }
// }
// export default connect(mapStateToProps)(Payment)

// import React, { Component } from 'react'
// import axios from '../../config/axios';

// export default class Payment extends React.Component {
//     state = {
//       amount: 10
//     };
  
//     constructor() {
//       super()
//       this.changeAmount = this.changeAmount.bind(this);
//       this.openCheckout = this.openCheckout.bind(this);
//     }
  
//     changeAmount(e) {
//       this.setState({amount: e.target.value})
//     }
  
//     openCheckout = async () => {
//         const orderUrl = `/order`;
//         const response = await axios.get(orderUrl);
//         const { data } = response;
//         alert(data.id)
//             console.log("this is response from api",data);
//       let options = {
//         "key": "rzp_test_6FWcmU32U1iLtf",
//         "amount": this.state.amount, // 2000 paise = INR 20, amount in paisa
//         "name": "Merchant Name",
//         "description": "Purchase Description",
//         "image": "/your_logo.png",
//         "handler": function (response){
//           alert(response.razorpay_payment_id);
//         },
//         "prefill": {
//           "name": "Harshil Mathur",
//           "email": "harshil@razorpay.com"
//         },
//         "notes": {
//           "address": "Hello World"
//         },
//         "theme": {
//           "color": "#F37254"
//         }
//       };
  
//       let rzp = new window.Razorpay(options);
//       rzp.open();
//     }
  
//     render () {
//       return (
//         <div>
//           <input type='text' onChange={
//              this.changeAmount
//             } />
//           <button onClick={this.openCheckout}>Pay Rs. {this.state.amount}</button> 
//         </div>
//       )
//     }
//   }

// import React, { Component } from 'react'
// import Axios from 'axios'

// export default class Payment extends Component {
//          paymentHandler = async (e) => {
//             const API_URL = 'http://localhost:3333/api/'
//             e.preventDefault();
//             const orderUrl = `${API_URL}order`;
//             const response = await Axios.get(orderUrl);
//             const { data } = response;
//                 console.log("this is order_id from api",data);
//             const options = {
//               key: 'rzp_test_6FWcmU32U1iLtf',
//               name: "Your App Name",
//               description: "Some Description",
//               order_id: data.id,
//               handler: async (response) => {
//                 try {
//                  const paymentId = response.razorpay_payment_id;
//                   console.log("this is paymentid from payment",paymentId);
//                  const url = `${API_URL}capture/${paymentId}`;
//                  const captureResponse = await Axios.post(url)
//                  console.log("this is RESPONSE",captureResponse.data);
//                 } catch (err) {
//                   console.log(err);
//                 }
//               },
//               theme: {
//                 color: "#686CFD",
//               },
//             };
//             const rzp1 = new window.Razorpay(options);
//             rzp1.open();
//             };
    
//     render() {
//         return (
//             <div>
//                 Payment
//                 <button onClick={this.paymentHandler}>Pay Now</button>
//             </div>
//         )
//     }
// }
