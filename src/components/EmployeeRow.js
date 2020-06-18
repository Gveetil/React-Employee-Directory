import React from "react";

const IMAGE_FILE_PATH = "/images/employees/";

class EmployeeRow extends React.Component {

    render(props) {
        const fullName = `${this.props.firstName} ${this.props.lastName}`;
        return (
            <tr className="align-middle">
                <td><img alt={fullName} className="img-fluid rounded employee-row-image my-2"
                    src={`${IMAGE_FILE_PATH}${this.props.image}`} /></td>
                <td>{fullName}</td>
                <td>{this.props.phone}</td>
                <td><a href={`mailto:${this.props.email}`}>{this.props.email}</a></td>
                <td>{this.props.title}</td>
                <td>{this.props.department}</td>
                <td>{this.props.location}</td>
                <td>{this.props.id}</td>
            </tr>
        );
    }
}

export default EmployeeRow;