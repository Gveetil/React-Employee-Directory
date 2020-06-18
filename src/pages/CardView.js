import React from "react";
import EmployeeCard from "../components/EmployeeCard";

class CardView extends React.Component {

    render() {
        return (
            <div className="align-center">
                <div className="d-flex flex-row flex-wrap px-1 justify-content-center">
                    {this.props.employees.map(employee =>
                        (<EmployeeCard
                            {...employee}
                        />)
                    )}
                </div>
            </div>
        );
    }
}

export default CardView;