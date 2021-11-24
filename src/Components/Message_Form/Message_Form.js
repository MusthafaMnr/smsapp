import React, { useState, useContext } from 'react'
import './Message_Form.css'
import { FirebaseContext, AuthContext } from '../../Store/Fb_Context';
import { useEffect } from 'react';

import axios from "../../axios";


function MessageForm() {
  const { firebase } = useContext(FirebaseContext)
  const { user } = useContext(AuthContext)
  const [donations, setDonations] = useState([])

  const [name, setName] = useState();
  const [place, setPlace] = useState();
  const [donat, setDonat] = useState();
  const [amount, setAmount] = useState();
  const [mobile, setMobile] = useState();

  const date = new Date();

  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.firestore().collection('Donations').add({
      name,
      place,
      donat,
      amount,
      mobile,
      userId: user.uid,
      createdAt: date.toDateString()
    })
  //  Message Setup
    axios.post()
    // console.log(user.Name);
  }

  useEffect(() => {
    firebase.firestore().collection("Donations")
    .orderBy("createdAt", "asc").get().then((snapshot) => {
      const allPost = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }

      })
      setDonations(allPost)
    })
  })

  return (
    <div id="main" class="main">

      <section class="section dashboard">
        <div class="row">

          {/* <!-- Left side columns --> */}
          <div class="col-lg-4">
            <div class="row">
              {/* <!-- Message Form --> */}
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Send Message</h5>
                  <div class="activity">

                    <div class="row g-3">
                      <div class="col-md-6">
                        <label for="validationServer01" class="form-label">Name</label>
                        <input type="text" class="form-control" id="" required
                          onChange={(e) => { setName(e.target.value) }} />

                      </div>
                      <div class="col-md-6">
                        <label for="validationServer02" class="form-label">Place</label>
                        <input type="text" class="form-control" id="" required
                          onChange={(e) => { setPlace(e.target.value) }} />
                      </div>
                      <div class="col-md-6">
                        <label for="validationServer04" class="form-label">Donation to </label>
                        <select class="form-select" id="" aria-describedby="validationServer04Feedback" required
                          onChange={(e) => { setDonat(e.target.value) }}>
                          <option selected disabled value="">Choose...</option>
                          <option>Swalath Majlis</option>
                          <option>Sadath Academy</option>
                          <option>Orpanage</option>
                        </select>
                      </div>

                      <div class="col-md-3">
                        <label for="" class="form-label">Amount</label>
                        <input type="number" class="form-control" id="validationServer05" aria-describedby="validationServer05Feedback" required
                          onChange={(e) => { setAmount(e.target.value) }} />

                      </div>
                      <div class="col-md-6">
                        <label for="" class="form-label">Mobile Number </label>
                        <input type="tel" class="form-control" id="phonenum" pattern="[1-9]{1}[0-9]{9}" required
                          onChange={(e) => { setMobile(e.target.value) }} />

                      </div>

                      <div class="col-12">
                        <button class="btn btn-primary" type="submit"
                          onClick={handleSubmit}
                        >Submit form</button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              {/* <!-- End Message Form --> */}
            </div>
          </div>
          {/* <!-- End Left side columns --> */}



          {/* <!-- Right side columns --> */}
          <div class="col-lg-8">
            {/* <!-- Message Report --> */}
            <div class="col-12">
              <div class="card recent-sales">

                {/* <div class="filter">
                  <a class="icon" href="/" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="/">Today</a></li>
                    <li><a class="dropdown-item" href="/">This Month</a></li>
                    <li><a class="dropdown-item" href="/">This Year</a></li>
                  </ul>
                </div> */}

                <div class="card-body">
                  <h5 class="card-title">Message Report</h5>
                  <div class="table-wrapper">
                    <table class="table table-borderless datatable">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Place</th>
                          <th scope="col">Donation to</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Mobile Number</th>
                        </tr>
                      </thead>

                      <tbody>

                        {donations.map((product,index) => {
                          return <tr>
                            <th scope="row"><a href="/">{index}</a></th>
                            <td><a class="text-primary">{product.name}</a></td>
                            <td>{product.place}</td>
                            <td>{product.donat}</td>
                            <td>{product.amount}</td>
                            <td>{product.mobile}</td>
                          </tr>
                        })
                        }
                      </tbody>

                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Message Report --> */}
          </div>
          {/* <!-- End Right side columns --> */}
        </div>
      </section>

    </div>


  )
}

export default MessageForm



  /* <div className="bannerParentDiv">
        <div className="has-bg">
          <div className="formParentDiv">
  
            <form class="row g-3">
              <div class="col-md-6">
                <label for="validationServer01" class="form-label">First name</label>
                <input type="text" class="form-control" id="" required
                  onChange={(e) => { setFirstname(e.target.value) }} />
  
              </div>
              <div class="col-md-6">
                <label for="validationServer02" class="form-label">Last name</label>
                <input type="text" class="form-control" id="" required
                  onChange={(e) => { setLastname(e.target.value) }} />
              </div>
              <div class="col-md-6">
                <label for="validationServer04" class="form-label">Donation to </label>
                <select class="form-select" id="" aria-describedby="validationServer04Feedback" required
                  onChange={(e) => { setDonat(e.target.value) }}>
                  <option selected disabled value="">Choose...</option>
                  <option>Swalath Majlis</option>
                  <option>Sadath Academy</option>
                  <option>Orpanage</option>
                </select>
              </div>
  
              <div class="col-md-3">
                <label for="" class="form-label">Amount</label>
                <input type="number" class="form-control" id="validationServer05" aria-describedby="validationServer05Feedback" required
                  onChange={(e) => { setAmount(e.target.value) }} />
  
              </div>
              <div class="col-md-6">
                <label for="" class="form-label">Mobile Number </label>
                <input type="tel" class="form-control" id="phonenum" pattern="[1-9]{1}[0-9]{9}" required
                  onChange={(e) => { setMobile(e.target.value) }} />
  
              </div>
  
              <div class="col-12">
                <button class="btn btn-primary" type="submit"
                  onClick={handleSubmit}
                >Submit form</button>
              </div>
            </form>
          </div>
  
          <div className="listParentDiv">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Donation to</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Mobile</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
  
        </div>
      </div> */




  // < tbody >
  // <tr>
  //   <th scope="row"><a href="/">#2457</a></th>
  //   <td>Brandon Jacob</td>
  //   <td><a href="/" class="text-primary">At praesentium minu</a></td>
  //   <td>$64</td>
  //   <td><span class="badge bg-success">Approved</span></td>
  // </tr>


  // </tbody >

