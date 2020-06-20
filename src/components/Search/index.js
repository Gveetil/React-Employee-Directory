import React from "react";
import SearchInput from "./SearchInput";
import SearchSelect from "./SearchSelect";
import "./style.css";

// This component generates the search form based on the column definitions specified
class Search extends React.Component {

    // Event handler updates search filter with value entered / selected
    handleInputChange = async event => {
        let value = event.currentTarget.value;
        const name = event.currentTarget.name;
        this.props.handleFilterChanged({ [name]: value });
    };

    // Resets the search filter
    handleSearchReset = async event => {
        const defaultFilter = this.props.columnDefinitions.defaultFilter();
        this.props.handleFilterChanged(defaultFilter);
    }

    render() {
        return (
            <form className="form-inline px-3 pt-4 pb-2 search-form justify-content-center">
                {this.props.columnDefinitions.columns.map(column =>
                    (column.filter) ? this.renderSearchField(column) : ""
                )}
                <button className="btn btn-secondary reset-button mx-1"
                    onClick={this.handleSearchReset}
                    type="reset">
                    <i className="fa fa-refresh pr-1" aria-hidden="true"></i> Reset</button>
            </form>
        );
    }

    // renders a search field based on column type
    renderSearchField(column) {
        if (column.options) {
            // column has options, so render a select field
            return (<SearchSelect key={column.id}
                column={column}
                handleInputChange={this.handleInputChange}
                value={this.props.filter[column.id]} />)
        }
        // By default render input field
        return (<SearchInput key={column.id}
            column={column}
            handleInputChange={this.handleInputChange}
            value={this.props.filter[column.id]} />)
    }
}

export default Search;