import React from "react";
function ResultMapper(props){
    return (
                <tr>
                    <td><img src={props.image}></img></td>
                    <td>{props.firstName}</td>
                    <td>{props.lastName}</td>
                    <td>{props.email}</td>
                    <td>{props.phone}</td>
                </tr>
    )
}

export default ResultMapper;