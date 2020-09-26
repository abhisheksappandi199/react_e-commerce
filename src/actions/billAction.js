import axios from '../config/axios'

export const getbill = (bill) =>{
    return {type:'GET_BILL' ,payload:bill}
}
export const removebill = (obj) =>{
    return {type:'UPDATE_bill_ACCOUNT' , payload:obj}
}

export const startGetBill = () =>{
    return (dispatch) =>{
        axios.get('/bill',{
            headers : {
                'Authorization' :  localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            const bill = response.data
            if(bill){
                dispatch(getbill(bill))
            }
        })
        .catch((error)=>{
            alert(error.message)
        })
    }
}
// export const startUpdatebill = (obj) =>{
//     return (dispatch)=>{
//         axios.put(`/account/edit`,obj,{
//             headers : {
//                 'Authorization' :  localStorage.getItem("authToken")
//             }
//         })
//         .then((response)=>{
//             const bill = response.data
//             if(!bill.errors){
//                 dispatch(updatebill(bill))
//             }
            
//         })
//         .catch((error)=>[
//             alert(error.message)
//         ])
//     }
// }