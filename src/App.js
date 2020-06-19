import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Search from "./components/Search";
import TableView from "./pages/TableView";
import CardView from './pages/CardView';
import Employees from "./utils/Employees";
import path from "path";

const IMAGE_FILE_PATH = path.join(process.env.PUBLIC_URL, "/images/employees/");

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      employees: Employees.all(),
      sort: { sortColumn: "name", sortAscending: true },
      search: { name: "", title: "", location: "", department: "" }
    };
    // Apply default sort criteria  
    Employees.applySort(this.state.employees, this.state.sort);
  }

  executeSearch = (searchCriteria) => {
    // Fetch filtered employees
    const filteredEmployees = Employees.filter(searchCriteria);
    // Apply current sort criteria  
    Employees.applySort(filteredEmployees, this.state.sort);
    this.setState({
      ...this.state,
      employees: filteredEmployees,
      search: { ...searchCriteria }
    });
    console.log("filter", searchCriteria);
  };

  handleSortChanged = (sortCriteria) => {
    // Apply new sort criteria to the current employee selection  
    Employees.applySort(this.state.employees, sortCriteria);
    this.setState({
      ...this.state,
      sort: { ...sortCriteria }
    });
    console.log("sort", sortCriteria);
  };

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Search executeSearch={this.executeSearch} />
        <Route exact path="/" render={() =>
          <TableView
            handleSortChanged={this.handleSortChanged}
            employees={this.state.employees}
            imageFilePath={IMAGE_FILE_PATH} />} />
        <Route exact path="/CardView" render={() =>
          <CardView
            employees={this.state.employees}
            imageFilePath={IMAGE_FILE_PATH} />} />
        <Footer />
      </BrowserRouter >
    );
  }
}

export default App;
