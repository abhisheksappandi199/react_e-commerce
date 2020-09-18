import firebase from 'firebase'

const config = {
        apiKey: "AIzaSyDcOjOvEd_dkjnuH3s4PnWRrzr60KgMmLA",
        authDomain: "react-upload-bd7bd.firebaseapp.com",
        databaseURL: "https://react-upload-bd7bd.firebaseio.com",
        projectId: "react-upload-bd7bd",
        storageBucket: "react-upload-bd7bd.appspot.com",
        messagingSenderId: "1010249251241",
        appId: "1:1010249251241:web:0934e4179cf138c446acb8",
        measurementId: "G-4LLXSQ1LVT"
}


const Firebase = firebase.initializeApp(config);
export default Firebase;