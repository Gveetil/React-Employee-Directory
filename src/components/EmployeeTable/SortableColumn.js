import React from "react";

class SortableColumn extends React.Component {
    render() {
        return (
            <th scope="col" className="p-0">
                <button className="btn btn-secondary sort-column rounded-0 w-100 h-100 text-left"
                    onClick={this.props.handleSortColumn} name={this.props.column.id}>
                    {this.props.column.name} {this.renderSortOrder(this.props.column.id)}
                </button>
            </th>);
    }

    renderSortOrder(columnName) {
        if (this.props.sortColumn === columnName) {
            if (this.props.sortAscending)
                return <i className="fa fa-caret-up fa-lg pl-2" aria-hidden="true"></i>;
            else
                return <i className="fa fa-caret-down fa-lg pl-2" aria-hidden="true"></i>;
        }
        return "";
    }
}

export default SortableColumn;