import React from "react";
import SortableColumn from "./SortableColumn";
import RegularColumn from "./RegularColumn";

// This component generates a table header row based on the column definitions specified
class TableHeaderRow extends React.Component {

    // Event handler for click on a sortable column - updates the table sort order
    handleSortColumn = async event => {
        event.preventDefault();
        const newSortColumn = event.currentTarget.name;
        let sortOrderAscending = true;
        if (this.props.sort.sortColumn === newSortColumn) {
            // Change sort order since it is the same column
            sortOrderAscending = !this.props.sort.sortAscending;
        }
        // Update table sort
        this.props.handleSortChanged({
            sortColumn: newSortColumn,
            sortAscending: sortOrderAscending
        });
    }

    render() {
        return (
            <thead>
                <tr>
                    {this.props.columnDefinitions.columns.map(column => {
                        return (column.sort) ?
                            (<SortableColumn key={column.id} column={column}
                                sortColumn={this.props.sort.sortColumn}
                                sortAscending={this.props.sort.sortAscending}
                                handleSortColumn={this.handleSortColumn} />)
                            :
                            (<RegularColumn key={column.id} column={column} />)
                    })}
                </tr>
            </thead >
        );
    }
}

export default TableHeaderRow;