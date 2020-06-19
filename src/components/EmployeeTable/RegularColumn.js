import React from "react";

class RegularColumn extends React.Component {
    render() {
        return (
            <th scope="col" className="p-0">
                <button className="btn btn-secondary reg-column text-light rounded-0 w-100 h-100 text-left">
                    {this.props.column.name}
                </button>
            </th>);
    }
}

export default RegularColumn;