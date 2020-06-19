import React from "react";
import "./style.css";

class EmployeeCard extends React.Component {

    render(props) {
        return (
            <div className="card employee-card pb-0 rounded-0 text-center">
                <div className="card-body p-2">
                    <img alt={this.props.name} className="img-fluid rounded-circle employee-card-image m-2"
                        src={`${this.props.imageFilePath}${this.props.image}`} />
                    <h5 className="card-title">{this.props.name}</h5>
                    <h6 className="card-title">{this.props.title}</h6>
                    <p>{this.props.department}</p>
                    <p>{this.props.phone}</p>
                    <p><a href="mailto:{this.props.email}">{this.props.email}</a></p>
                    <p>Employee Id: {this.props.id}</p>
                    <p>{this.props.location}</p>
                </div>
            </div>
        );
    }
}

export default EmployeeCard;