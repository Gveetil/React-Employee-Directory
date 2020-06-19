import React from "react";
import "./style.css";

class Search extends React.Component {

    state = {
        name: "",
        title: "",
        location: "",
        department: "",
    };

    handleInputChange = async event => {
        let value = event.currentTarget.value;
        const name = event.currentTarget.name;
        await this.setState({
            [name]: value
        });
        this.props.executeSearch(this.state);
    };

    handleSearchReset = async event => {
        await this.setState({
            name: "", title: "", location: "", department: ""
        });
        this.props.executeSearch(this.state);
    }

    render() {
        return (
            <form className="form-inline px-3 pt-4 pb-2 search-form justify-content-center">
                <div className="input-group mx-1" title="Employee Name">
                    <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fa fa-search" aria-hidden="true"></i></div>
                    </div>
                    <input className="form-control" type="text"
                        onChange={this.handleInputChange}
                        value={this.state.name}
                        name="name"
                        placeholder="Employee Name ..." />
                </div>
                <div className="input-group mx-1" title="Job Title">
                    <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fa fa-search" aria-hidden="true"></i></div>
                    </div>
                    <input className="form-control" type="text"
                        onChange={this.handleInputChange}
                        value={this.state.title}
                        name="title"
                        placeholder="Job Title ..." />
                </div>
                <select id="inputLocation" className="form-control mx-1"
                    onChange={this.handleInputChange}
                    value={this.state.location}
                    name="location"
                    title="Location">
                    <option value="">Location...</option>
                    <option value="Melbourne">Melbourne</option>
                    <option value="Perth">Perth</option>
                    <option value="Sydney">Sydney</option>
                </select>
                <select id="inputDepartment" className="form-control mx-1"
                    onChange={this.handleInputChange}
                    value={this.state.department}
                    name="department"
                    title="Department">
                    <option value="">Department...</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Finance">Finance</option>
                    <option value="Legal">Legal</option>
                    <option value="Sales">Sales</option>
                </select>
                <button className="btn btn-secondary reset-button mx-1"
                    onClick={this.handleSearchReset}
                    type="reset">
                    <i className="fa fa-refresh pr-1" aria-hidden="true"></i> Reset</button>
            </form>
        );
    }
}

export default Search;