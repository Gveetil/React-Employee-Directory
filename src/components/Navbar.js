import React from "react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark emp-dir-background">
                <Link to="/" className="navbar-brand">Employee Directory</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav ml-auto">
                        <li className={this.getActiveClass("/")}>
                            <Link to="/" className="nav-link">
                                <i className="fa fa-list-ul" aria-hidden="true"></i> List
                            </Link>
                        </li>
                        <li className={this.getActiveClass("/CardView")}>
                            <Link to="/CardView" className="nav-link">
                                <i className="fa fa-th" aria-hidden="true"></i> Card
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

    getActiveClass(value) {
        return (this.props.location.pathname === value) ? "nav-item active" : "nav-item";
    }
}

export default withRouter(Navbar);