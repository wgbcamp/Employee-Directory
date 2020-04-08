import React, {Component} from "react";
import SearchField from "./SearchField";
import ResultMapper from "./ResultMapper";
import api from "../utils/api";
import Table from "react-bootstrap/Table";

class SearchResults extends Component {
    state = {
        search: "",
        results: []
    };

    componentDidMount() {
        
        api.search()
        .then(res => {
            
            this.setState({ 
            results: res.data.results.map((e, i)=>({
                image: e.picture.large,
                firstName: e.name.first,
                lastName: e.name.last,
                email: e.email,
                phone: e.phone,
                key: i
        
                }))

            })

         })
        .catch(err => console.log(err));
    };
    
    // searchUser = event => {
    //     {[...this.state.results].filter(e => )}
    // }

    handleInputChange = event =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchUser(this.state.search);
    };

    render() {
        return (
            <div>
                <SearchField
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    />


        <Table striped bordered hover>
            <thead>
        <tr>
               <th>Image</th>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Email Address</th>
               <th>Phone Number</th>
        </tr>
        </thead>
        <tbody>
        {[...this.state.results].map((e) =>
            <ResultMapper
                image={e.image}
                firstName={e.firstName}
                lastName={e.lastName}
                email={e.email}
                phone={e.phone}
            />
            )}
        </tbody>
        </Table>
            </div>
        )
    }
}

export default SearchResults;