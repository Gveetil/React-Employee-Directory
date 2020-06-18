import React from "react";

class Search extends React.Component {

    render() {
        return (
            <form className="form-inline px-3 pt-4 pb-2 search-form justify-content-center">
                <div className="input-group mx-1" title="Employee Name">
                    <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fa fa-search" aria-hidden="true"></i></div>
                    </div>
                    <input className="form-control" type="text" placeholder="Employee Name ..." />
                </div>
                <div className="input-group mx-1" title="Job Title">
                    <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fa fa-search" aria-hidden="true"></i></div>
                    </div>
                    <input className="form-control" type="text" placeholder="Job Title ..." />
                </div>
                <select id="inputLocation" className="form-control mx-1" title="Location">
                    <option selected>Location...</option>
                    <option>Melbourne</option>
                    <option>Perth</option>
                    <option>Sydney</option>
                </select>
                <select id="inputDepartment" className="form-control mx-1" title="Department">
                    <option selected>Department...</option>
                    <option>Engineering</option>
                    <option>Finance</option>
                    <option>Legal</option>
                    <option>Sales</option>
                </select>
                <button className="btn btn-secondary reset-button mx-1" type="reset">
                    <i className="fa fa-refresh pr-1" aria-hidden="true"></i> Reset</button>
            </form>
        );
    }
}

export default Search;