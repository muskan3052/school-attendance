 import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAgcbU-0rdImNwcIcc8foXfimlPrteqv_w",
  authDomain: "school-attendance-e0fe5.firebaseapp.com",
  databaseURL: "https://school-attendance-e0fe5-default-rtdb.firebaseio.com",
  projectId: "school-attendance-e0fe5",
  storageBucket: "school-attendance-e0fe5.appspot.com",
  messagingSenderId: "876928897720",
  appId: "1:876928897720:web:cf58bab2bd488778ee5a4d"
};

//initialize your database
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
  }


  export default firebase.database()
 

  