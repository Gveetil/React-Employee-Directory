import React from "react";
import EmployeeTable from "../components/EmployeeTable";

class TableView extends React.Component {

    columnDefinitions = [
        { "id": "picture", "name": "Picture", "sort": false },
        { "id": "name", "name": "Name", "sort": true },
        { "id": "phone", "name": "Phone", "sort": false },
        { "id": "email", "name": "Email", "sort": false },
        { "id": "title", "name": "Title", "sort": true },
        { "id": "department", "name": "Department", "sort": true },
        { "id": "location", "name": "Location", "sort": true },
        { "id": "id", "name": "Employee Id", "sort": true }
    ];

    render() {
        return (
            <EmployeeTable
                {...this.props}
                columnDefinitions={this.columnDefinitions} />
        );
    }

}

export default TableView;