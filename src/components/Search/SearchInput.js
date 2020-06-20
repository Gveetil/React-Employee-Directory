import React from "react";

// This component generates a search input field for a given search column
class SearchInput extends React.Component {
    render(props) {
        return (
            <div className="input-group mx-1" title={this.props.column.name}>
                <div className="input-group-prepend">
                    <div className="input-group-text"><i className="fa fa-search" aria-hidden="true"></i></div>
                </div>
                <input className="form-control" type="text"
                    onChange={this.props.handleInputChange}
                    value={this.props.value}
                    name={this.props.column.id}
                    placeholder={`${this.props.column.name} ...`} />
            </div>
        );
    }
}

export default SearchInput;