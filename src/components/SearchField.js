import React from "react";

function SearchField(props){
    return (
        <form>
            <div className="form-group">
                <label>Search:</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search for an employee by their name"
                    id="search"
                />
                <button onClick={props.handleFormSubmit} className="btn">
                    Search
                </button>
            </div>
        </form>
    );
}

export default SearchField;