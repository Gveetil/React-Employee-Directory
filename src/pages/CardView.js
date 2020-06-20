import React from "react";
import EmployeeCard from "../components/EmployeeCard";

// This page displays employee data in cards
class CardView extends React.Component {

    componentDidMount() {
        // Update table sort to use default sorting 
        this.props.handleSortChanged(this.props.defaultSort);
    }

    render() {
        return (
            <div className="align-center">
                <div className="d-flex flex-row flex-wrap px-1 pb-3 justify-content-center">
                    {this.renderCards()}
                </div>
            </div>
        );
    }

    // renders all employee cards
    renderCards() {
        // Default text if no records are found
        if (this.props.employees === null || this.props.employees.length <= 0) {
            return <div>Your Search did not match any employees !</div>
        }
        // render all rows
        return this.props.employees.map(employee =>
            (<EmployeeCard key={employee.id}
                imageFilePath={this.props.imageFilePath}
                data={employee} />));
    }
}

export default CardView;