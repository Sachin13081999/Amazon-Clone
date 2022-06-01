import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout  from "./Checkout";
import Login from "./Login";
import {auth} from "./Firebase";
import {useStateValue} from "./StateProvider";
import { useEffect } from 'react';

function App() {
  const [{} , dispatch] = useStateValue();
  useEffect(() => {
    //only run once when the app component loads...
       auth.onAuthStateChanged(authUser => {
         console.log('THE USER IS>>>', authUser);
         if(authUser){
           // the user is logged in/the user is loged in
           dispatch({
           type:'SET_USER',
           user: authUser, 
           })

          }
           else{
             //the user is logged out
             dispatch({
             type:'SET_USER',
             user: null,
             })
           }
       })
  }, [])
  return (
    <Router>
     <div className="app">
      <Routes>
       <Route path='/login' element={<><Login/></>}/>
       <Route path='/Checkout' element={<><Header/><Checkout /></>}/>
       <Route path='/' element={<><Header/><Home /></>}/>
      </Routes >
    </div>
  </Router> 
    
   );
}

export default App;
