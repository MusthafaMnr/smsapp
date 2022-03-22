import React, { useState, useContext } from 'react'
import './Message_Form.css'
import { FirebaseContext, AuthContext } from '../../Store/Fb_Context';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

import axios from "../../axios";
import { userId, key, entityId, tempId } from "../../constants/constants"

import Spinners from '../../assets/Spinners'
import DataTable from './Data_Table'

function MessageForm() {
  const { firebase } = useContext(FirebaseContext)
  const { user } = useContext(AuthContext)
  // const [donations, setDonations] = useState([])

  const [name, setName] = useState();
  const [place, setPlace] = useState();
  const [donat, setDonat] = useState();
  const [amount, setAmount] = useState();
  const [mobile, setMobile] = useState();

  const [formLoading, setFormloading] = useState();
  const history = useHistory();
  const [smsBalance, setSmsBalance] = useState()

  // const Status=false;

  const date = new Date();
  

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormloading(true);
    //  Message Setup
    axios.post(`submitsms.jsp?user=${userId}&key=${key}&mobile=+91${mobile}&message=Dear ${name}, 
    we recieved with thanks sum of ${amount} rupees towards donation to the ${donat} 
    Madin academy&senderid=MAHDIN&accusage=1&entityid=${entityId}&tempid=${tempId}`
    ).then((response) => {
      // console.log(response.data[2])
      alert(response.data)
      setFormloading(false);
      history.push('/form')
      // setFormloading(false);
   
  if(response.data[2] === 's'){
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
      }else{
        
      }
    })
  }

  useEffect(() => {

    
    axios.get(`getbalance.jsp?user=${userId}&key=${key}&accusage=1`)
    .then((response) =>{
      // console.log(response.data); 
      setSmsBalance(response.data)    
    })
  
 
  }, [])

  
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
                        >SEND</button> }
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              {/* <!-- End Message Form --> */}

              {/* <!-- Message Balance Card --> */}

              <div class="col-xxl-6 col-md-6">
              <div class="card info-card sales-card">
                <div class="card-body">
                  <h5 class="card-title">Message Balance </h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-chat-right-dots"></i>
                    </div>
                    <div class="ps-3"> 
                      <h3 >{smsBalance}</h3>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* <!-- End Message Balance Card --> */}
            </div>
          </div>
          {/* <!-- End Left side columns --> */}


          {/* <!-- Right side columns --> */}
          <div class="col-lg-8">
            {/* <!-- Message Report --> */}
            <div class="col-12">
              <div class="card recent-sales">               
              <DataTable user="hi"></DataTable>                                 
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


//   firebase.firestore().collection('Donations').add({
//     name,
//     place,
//     donat,
//     amount,
//     mobile,
//     userId: user.uid,
//     createdAt:date.toLocaleString()
//     // createdAt: date.toDateString(),
//   })
//   setFormloading(true);
//   //  Message Setup
//   axios.post(`submitsms.jsp?user=${userId}&key=${key}&mobile=+91${mobile}&message=Dear ${name}, we recieved with thanks sum of 10 rupees towards donation to the ${donat} Madin academy&senderid=MAHDIN&accusage=1&entityid=${entityId}&tempid=${tempId}`
//   ).then((response) => {
//     setFormloading(false);
//     // console.log(response.status)
    
//     alert(response.data)
//     history.push('/form')
//   })

  
// }