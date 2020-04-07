import React from "react";
import Table from "react-bootstrap/Table";

function EmployeeTemplate(){
    return (
        <Table striped bordered hover>
        <tr>
               <th>#</th>
               <th>Image</th>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Email address</th>
               <th>Phone Number</th>

        </tr>
        </Table>
    )
}

export default EmployeeTemplate;