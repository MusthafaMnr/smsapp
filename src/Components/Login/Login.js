import React, { useContext, useState, useEffect } from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../../Store/Fb_Context';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Spinners from '../../assets/Spinners'


function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [loading, setloading] = useState()

  useEffect(() => {
    AOS.init();
  }, [])

  const handlelogin = (e) => {
    e.preventDefault()
    setloading(true)
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      history.push('/')
      // alert('Logged In')
    }).catch((error) => {
      alert(error.message)
      setloading(false)
    })
  }

  return (
    <div id="hero" class="hero d-flex align-items-center ,Back" >
      <div class="container">
        <div class="row">
          <div class="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
            <img src="../../../Image/login-img.png" class="img-fluid" alt="" />
          </div>

          <div class="col-lg-6 d-flex flex-column justify-content-center">
            <div class="form-block">
              <h1 data-aos="fade-up" class="text-center">USER LOGIN</h1>
              <div data-aos="fade-up" data-aos-delay="600">

                <form className="form" onSubmit={handlelogin}>
                  <br />
                  {/* <label htmlFor="fname"></label> */}
                  <div className="form-group">
                    <input
                      type="email"
                      onChange={(e) => { setEmail(e.target.value) }}
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email" />
                  </div>
                  <div className="form-group">
                    <br />
                    {/* <label htmlFor="exampleInputPassword1"></label> */}
                    <input
                      type="password" className="form-control"
                      onChange={(e) => { setPassword(e.target.value) }}
                      id="exampleInputPassword1"
                      placeholder="Password" />
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-lg-6 d-flex  justify-content-center">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <div class="col-lg-6 d-flex  justify-content-center">
                      <label className="form-forgot-password" htmlFor="exampleCheck1">Forgot Password?</label>
                    </div>
                  </div>
                  <div class="text-center">
                    {loading ? <Spinners/> : <button type="submit" 
                    class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">LOGIN</button> } 
                    {/* <button type="submit"  */}
                    {/* class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">LOGIN</button> */}
                  </div>

                </form>

                {/* <Spinners/> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="has-bg-img">
    //   <img className="img-fluid" src="../../../Image/BG-Large.jpg" alt="..." />
    //   <div className="has-bg-Gradient">
    //     <div className="Bg">
    //       <div className="loginParentDiv">
    //         <img width="215px" height="59px" className="logo"
    //           src={Logo} alt='' />
    //         <h2 className="title">Login</h2>

    //         <form className="form" onSubmit={handlelogin}>

    //           <div className="form-group">
    //             <label htmlFor="fname">Email address</label>
    //             <input
    //               type="email"
    //               onChange={(e) => { setEmail(e.target.value) }}
    //               className="form-control"
    //               id="exampleInputEmail1"
    //               aria-describedby="emailHelp"
    //               placeholder="Enter email" />
    //             <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    //           </div>
    //           <div className="form-group">
    //             <label htmlFor="exampleInputPassword1">Password</label>
    //             <input
    //               type="password" className="form-control"
    //               onChange={(e) => { setPassword(e.target.value) }}
    //               id="exampleInputPassword1"
    //               placeholder="Password" />
    //           </div>
    //           <div className="form-group form-check">
    //             <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    //             <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    //           </div>
    //           <button type="submit" className="btn btn-secondary">LOGIN</button>
    //         </form>

    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Login
