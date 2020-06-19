import React from "react";

class EmployeeRow extends React.Component {

    render(props) {
        return (
            <tr className="align-middle">
                <td><img alt={this.props.name} className="img-fluid rounded employee-row-image my-2"
                    src={`${this.props.imageFilePath}${this.props.image}`} /></td>
                <td>{this.props.name}</td>
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