import React,{useContext,useEffect} from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { AuthContext, FirebaseContext } from './Store/Fb_Context';


function App() {
  const {user,setUser} = useContext(AuthContext)
  const {firebase} =useContext(FirebaseContext)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
    
  }, [])
  return (
    
    <div>
      
      <Router>
        <Route exact path='/'>
          <Login/>
        </Route>
        <Route path='/Home'>
          <Home/>
        </Route>
      </Router>
      
    </div>

  );
}

export default App;