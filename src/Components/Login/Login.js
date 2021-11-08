import React, { useContext, useState } from 'react'
import './Login.css'
import {useHistory} from 'react-router-dom'
import Logo from '../../mdn-logo.png';
import { FirebaseContext } from '../../Store/Fb_Context';


function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();
  const {firebase} = useContext(FirebaseContext);

  const handlelogin = (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/home')
      //alert('Logged In')
    }).catch((error)=>{
      alert(error.message)
    })
  }

  return (
    <div className="has-bg-img">
      <img className="img-fluid" src="../../../Image/BG-Large.jpg" alt="..." />
      <div className="has-bg-Gradient">
        <div className="Bg">
          <div className="loginParentDiv">
            <img width="215px" height="59px" className="logo"
              src={Logo} alt='' />
            <h2 className="title">Login</h2>

            <form className="form" onSubmit={handlelogin}>

              <div className="form-group">
                <label htmlFor="fname">Email address</label>
                <input
                  type="email"
                  onChange={(e) => { setEmail(e.target.value) }}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password" className="form-control"
                  onChange={(e) => { setPassword(e.target.value) }}
                  id="exampleInputPassword1"
                  placeholder="Password" />
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" className="btn btn-secondary">LOGIN</button>
            </form>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
