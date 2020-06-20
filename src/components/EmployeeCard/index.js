import React from "react";
import "./style.css";

// This component generates an employee card based on the data specified
class EmployeeCard extends React.Component {

    render() {
        return (
            <div className="card employee-card pb-0 rounded-0 text-center">
                <div className="card-body p-2">
                    <img alt={this.props.data.name} className="img-fluid rounded-circle employee-card-image m-2"
                        src={`${this.props.imageFilePath}${this.props.data.image}`} />
                    <h5 className="card-title">{this.props.data.name}</h5>
                    <h6 className="card-title">{this.props.data.title}</h6>
                    <p>{this.props.data.department}</p>
                    <p>{this.props.data.phone}</p>
                    <p><a href={`mailto:${this.props.data.email}`}>{this.props.data.email}</a></p>
                    <p>Employee Id: {this.props.data.id}</p>
                    <p>{this.props.data.location}</p>
                </div>
            </div>
        );
    }
}

export default EmployeeCard;