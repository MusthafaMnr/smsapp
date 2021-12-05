import React, { useState,useEffect, useContext } from 'react'
import { FirebaseContext} from '../../Store/Fb_Context';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';



function Table() {
  const { firebase } = useContext(FirebaseContext)
  const [donations, setDonations] = useState([])


  const columns = [{
    dataField: 'id',text: 'ID'
  }, {
    dataField: 'name', text: 'Name'
  }, {
    dataField: 'place',text: 'Place'
  },{
    dataField: 'Donation',text: 'Donation to'
  },{
    dataField: 'amount',text: 'Amount'
  },{
    dataField: 'mobile',text: 'Mobile Number'
  }];

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
  },[])


  return (
    <div>
      <BootstrapTable keyField="id" columns={columns} data={donations} />

      {/* <table>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Place</th>
          <th>Donation to</th>
          <th>Amount</th>
          <th>Mobile Number</th>
        </tr>
        {
          donations && donations.length> 0 ?
          donations.map((product, index) =>
          <tr>
            <th scope="row"><a >{index}</a></th>
            <td><a class="text-primary">{product.name}</a></td>
            <td>{product.place}</td>
            <td>{product.donat}</td>
            <td>{product.amount}</td>
            <td>{product.mobile}</td>
          </tr>
          )
          : "loading"
        }
      </table> */}
    </div>
  )
}

export default Table
