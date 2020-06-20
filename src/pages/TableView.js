import React from "react";
import EmployeeTable from "../components/EmployeeTable";

// This page displays employee data in a table based on the column definitions specified
class TableView extends React.Component {

    render() {
        return (
            <EmployeeTable
                handleSortChanged={this.props.handleSortChanged}
                employees={this.props.employees}
                sort={this.props.sort}
                imageFilePath={this.props.imageFilePath}
                columnDefinitions={this.props.columnDefinitions} />
        );
    }

}

export default TableView;