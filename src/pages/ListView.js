import React from "react";
import EmployeeRow from "../components/EmployeeRow";

class ListView extends React.Component {
    render() {
        return (
            <table className="table table-striped employee-table">
                <thead className="emp-table-header">
                    <tr>
                        <th scope="col">Picture</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Title</th>
                        <th scope="col">Department</th>
                        <th scope="col">Location</th>
                        <th scope="col">Employee Id</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        );
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

export default ListView;