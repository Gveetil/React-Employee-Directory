import React from "react";

// This component generates a search dropdown for a given search column
class SearchSelect extends React.Component {
    render(props) {
        return (
            <select className="form-control mx-1"
                value={this.props.value}
                onChange={this.props.handleInputChange}
                name={this.props.column.id}
                title={this.props.column.name}>
                <option value="">{this.props.column.name} ...</option>
                {this.props.column.options.map(item =>
                    <option key={item} value={item}>{item}</option>
                )}
            </select>
        );
    }
}

export default SearchSelect;