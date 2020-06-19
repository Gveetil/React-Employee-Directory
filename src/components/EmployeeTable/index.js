import React from "react";
import TableHeaderRow from "./TableHeaderRow";
import EmployeeRow from "./EmployeeRow";
import "./style.css";

class EmployeeTable extends React.Component {

    render() {
        return (
            <div className="table-responsive">
                <table className="table table-striped employee-table">
                    <TableHeaderRow
                        handleSortChanged={this.props.handleSortChanged}
                        columnDefinitions={this.props.columnDefinitions} />
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>);
    }

    renderRows() {
        if (this.props.employees === null || this.props.employees.length <= 0) {
            return <tr>
                <td colSpan="8" className="py-4 text-center">
                    Your Search did not match any employees !</td>
            </tr>
        }
        return this.props.employees.map(employee =>
            (<EmployeeRow key={employee.id}
                imageFilePath={this.props.imageFilePath}
                {...employee} />));
    }

}

export default EmployeeTable;