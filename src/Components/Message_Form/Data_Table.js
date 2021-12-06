import React, { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../../Store/Fb_Context';
import './Data_Table.css'
import BootstrapTable from 'react-bootstrap-table-next';
// import 'bootstrap/dist/css/bootstrap.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import Spinners from '../../assets/Spinners'



function Data_Table() {
    const { firebase } = useContext(FirebaseContext)
    const [donations, setDonations] = useState([])

    const [tableLoading, setTableloading] = useState()

    const { SearchBar } = Search;

    const columns = [{
        dataField: 'position', text: '#'
    }, {
        dataField: 'name', text: 'Name'
    }, {
        dataField: 'place', text: 'Place'
    }, {
        dataField: 'donat', text: 'Donation to'
    }, {
        dataField: 'amount', text: 'Amount'
    }, {
        dataField: 'mobile', text: 'Mobile Number'
    }];

    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 10,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
    });


    useEffect(() => {
        firebase.firestore().collection("Donations")
            .orderBy("createdAt", "asc").get().then((snapshot) => {
                const allPost = snapshot.docs.map((product) => {
                    return {
                        ...product.data(),
                        id: product.id
                    }
                })
                setTableloading(true);
                setDonations(allPost)
            })
    }, [])

    return (
        <div >
            

            <ToolkitProvider
                keyField="id"
                data={donations}
                columns={columns}
                search
            >
                {
                    props => (
                        <div>
                            <div class="Table-card-body">
                            <div class="Table-card-title row">
                                <div class="col-lg-6 " >
                                    <h5 >Message Report</h5>
                                </div>
                                <div class="col-lg-6 ">
                                <label class="col-lg-3 "/>
                                    
                                    <div class="table-search col-lg-3">
                                    <SearchBar  {...props.searchProps} />
                                    </div>                               
                                </div>
                            
                            </div>
                            <div class="table-wrapper">
                            {tableLoading ?
                                <BootstrapTable
                                pagination={pagination}
                                {...props.baseProps}
                            /> : <Spinners></Spinners>}
                            </div>
                            </div>
                        </div>
                    )
                }
            </ToolkitProvider>
            
        </div>
    )
}

export default Data_Table




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
                    donations && donations.length > 0 ?
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