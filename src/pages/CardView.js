import React from "react";
import EmployeeCard from "../components/EmployeeCard";

class CardView extends React.Component {

    render() {
        return (
            <div className="align-center">
                <div className="d-flex flex-row flex-wrap px-1 pb-3 justify-content-center">
                    {this.renderCards()}
                </div>
            </div>
        );
    }

    renderCards() {
        if (this.props.employees === null || this.props.employees.length <= 0) {
            return <div>Your Search did not match any employees !</div>
        }
        return this.props.employees.map(employee =>
            (<EmployeeCard key={employee.id}
                imageFilePath={this.props.imageFilePath}
                {...employee} />));
    }
}

export default CardView;