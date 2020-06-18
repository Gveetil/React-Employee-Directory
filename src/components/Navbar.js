import React from "react";
import { Link, useLocation } from "react-router-dom";

class Navbar extends React.Component {

    render() {
        // const location = useLocation();
        return (
            <nav className="navbar navbar-expand-lg navbar-dark emp-dir-background">
                <a href="/" className="navbar-brand">Employee Directory</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownSort" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sort
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownSort">
                                <a className="dropdown-item" href="/">Action</a>
                                <a className="dropdown-item" href="/">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">
                                <i className="fa fa-list-ul" aria-hidden="true"></i> List
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/CardView" className="nav-link">
                                <i className="fa fa-th" aria-hidden="true"></i> Card
                            </Link>
                            {/* fa-id-card-o */}
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;