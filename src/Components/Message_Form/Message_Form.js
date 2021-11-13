import React, { useState } from 'react'
import './Message_Form.css'


function MessageForm() {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [donat, setDonat] = useState();
  const [amount, setAmount] = useState();
  const [mobile, setMobile] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submited');
  }
  return (
    <div className="bannerParentDiv">
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
    </div>
  )
}

export default MessageForm
