import React, { useState, useContext } from 'react'
import './Message_Form.css'
import { FirebaseContext, AuthContext } from '../../Store/Fb_Context';
import { useEffect } from 'react';

import axios from "../../axios";
import { userId, key, entityId, tempId } from "../../constants/constants"

import Spinners from '../../assets/Spinners'
import Data_Table from './Data_Table'

function MessageForm() {
  const { firebase } = useContext(FirebaseContext)
  const { user } = useContext(AuthContext)
  const [donations, setDonations] = useState([])

  const [name, setName] = useState();
  const [place, setPlace] = useState();
  const [donat, setDonat] = useState();
  const [amount, setAmount] = useState();
  const [mobile, setMobile] = useState();

  const [formLoading, setFormloading] = useState();
  
  // const Status=false;

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
      createdAt:date.toLocaleString()
      // createdAt: date.toDateString(),
    })
    setFormloading(true);
    //  Message Setup
    axios.post(`submitsms.jsp?user=${userId}&key=${key}&mobile=+91${mobile}&message=Dear ${name}, we recieved with thanks sum of 10 rupees towards donation to the ${donat} Madin academy&senderid=MAHDIN&accusage=1&entityid=${entityId}&tempid=${tempId}`
    ).then((response) => {
      setFormloading(false);
      // console.log(response.status)
      
      alert(response.data)
    })

    
  }

  
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
                        {formLoading ?  <Spinners /> : <button class="btn btn-primary" type="submit"
                          onClick={handleSubmit}
                        >Submit form</button> }
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
              <Data_Table></Data_Table>                                 
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




// useEffect(() => {
  //   firebase.firestore().collection("Donations")
  //   .orderBy("createdAt", "asc").get().then((snapshot) => {
  //     const allPost = snapshot.docs.map((product) => {
  //       return {
  //         ...product.data(),
  //         id: product.id
  //       }

  //     })
  //     setDonations(allPost)
  //   })
  // })


  // < table class="table table-borderless datatable" >
  //   <thead>
  //     <tr>
  //       <th scope="col">#</th>
  //       <th scope="col">Name</th>
  //       <th scope="col">Place</th>
  //       <th scope="col">Donation to</th>
  //       <th scope="col">Amount</th>
  //       <th scope="col">Mobile Number</th>
  //     </tr>
  //   </thead>
  //  </table >


  // <table class="table table-borderless datatable">
  //   {formLoading ?
  //     <tbody>
  //       {donations.map((product, index) => {
  //         return <tr>
  //           <th scope="row"><a href="/">{index}</a></th>
  //           <td><a class="text-primary">{product.name}</a></td>
  //           <td>{product.place}</td>
  //           <td>{product.donat}</td>
  //           <td>{product.amount}</td>
  //           <td>{product.mobile}</td>
  //         </tr>
  //       })
  //       }
  //     </tbody> : <Spinners class="formloading" />}
  // </table>