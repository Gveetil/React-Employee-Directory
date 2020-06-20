import React from "react";
import TableHeaderRow from "./TableHeaderRow";
import TableRow from "./TableRow";
import "./style.css";

// This component generates the employee table based on the column definitions specified
class EmployeeTable extends React.Component {

    render() {
        return (
            <div className="table-responsive">
                <table className="table table-striped employee-table">
                    <TableHeaderRow
                        sort={this.props.sort}
                        handleSortChanged={this.props.handleSortChanged}
                        columnDefinitions={this.props.columnDefinitions} />
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>);
    }

    // Renders all table data rows 
    renderRows() {
        // Default text if no records are found
        if (this.props.employees === null || this.props.employees.length <= 0) {
            return <tr>
                <td colSpan="8" className="py-4 text-center">
                    Your Search did not match any employees !</td>
            </tr>
        }
        // render all rows
        return this.props.employees.map(employee =>
            (<TableRow key={employee.id}
                columnDefinitions={this.props.columnDefinitions}
                imageFilePath={this.props.imageFilePath}
                data={employee} />));
    }

}

export default EmployeeTable;