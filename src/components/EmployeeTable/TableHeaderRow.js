import React from "react";
import SortableColumn from "./SortableColumn";
import RegularColumn from "./RegularColumn";

class TableHeaderRow extends React.Component {
    state = {
        sortColumn: "name",
        sortAscending: true
    }

    handleSortColumn = async event => {
        event.preventDefault();
        const newSortColumn = event.currentTarget.name;
        let sortOrderAscending = true;
        if (this.state.sortColumn === newSortColumn) {
            // Change sort order since it is the same column
            sortOrderAscending = !this.state.sortAscending;
        }
        await this.setState({
            sortColumn: newSortColumn,
            sortAscending: sortOrderAscending
        });
        this.props.handleSortChanged(this.state);
    }

    render() {
        return (
            <thead>
                <tr>
                    {this.props.columnDefinitions.map(column => {
                        return (column.sort) ?
                            (<SortableColumn key={column.id} column={column}
                                sortColumn={this.state.sortColumn}
                                sortAscending={this.state.sortAscending}
                                handleSortColumn={this.handleSortColumn} />)
                            :
                            (<RegularColumn key={column.id} column={column} />)
                    })}
                </tr>
            </thead >
        );
    }

    renderSortOrder(columnName) {
        if (this.state.sortColumn === columnName) {
            if (this.state.sortAscending)
                return <i className="fa fa-caret-up fa-lg pl-2" aria-hidden="true"></i>;
            else
                return <i className="fa fa-caret-down fa-lg pl-2" aria-hidden="true"></i>;
        }
        return "";
    }
}

export default TableHeaderRow;