import React,{useContext,useEffect} from 'react';
import './App.css';
import Home from '../src/Pages/Home'
import Form from '../src/Pages/Form'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { AuthContext, FirebaseContext } from './Store/Fb_Context';
import Login from './Pages/Login';


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
          <Home/>
        </Route>
        <Route exact path='/login'>
          <Login/>
        </Route>
        <Route path='/Form'>
          <Form/>
        </Route>
      </Router>
      
    </div>

  );
}

export default App;