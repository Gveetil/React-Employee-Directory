import React from "react";

const IMAGE_FILE_PATH = "/images/employees/";

class EmployeeCard extends React.Component {

    render(props) {
        const fullName = `${this.props.firstName} ${this.props.lastName}`;
        return (
            <div className="card employee-card pb-0 rounded-0 text-center">
                <div class="card-body p-2">
                    <img alt={fullName} className="img-fluid rounded-circle employee-card-image m-2"
                        src={`${IMAGE_FILE_PATH}${this.props.image}`} />
                    <h5 className="card-title">{fullName}</h5>
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