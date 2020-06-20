import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Search from "./components/Search";
import TableView from "./pages/TableView";
import CardView from './pages/CardView';
import Employees from "./utils/Employees";
import ColumnDefinitions from "./utils/ColumnDefinitions";
import path from "path";

// Path to employee images folder
const IMAGE_FILE_PATH = path.join(process.env.PUBLIC_URL, "/images/employees/");

// The main application root component
class App extends React.Component {

  constructor(props) {
    super(props);

    // Apply default sort criteria to employee dataset before loading state
    const employeeDataset = Employees.all();
    Employees.applySort(employeeDataset, ColumnDefinitions.defaultSort());

    // Load state
    this.state = {
      employees: employeeDataset,
      sort: ColumnDefinitions.defaultSort(),
      filter: ColumnDefinitions.defaultFilter()
    };
  }

  // This function applies a search filter to the employees dataset
  handleFilterChanged = (filter) => {
    const searchCriteria = { ...this.state.filter, ...filter };
    const filteredEmployees = Employees.filter(searchCriteria);

    // Apply current sort criteria  
    Employees.applySort(filteredEmployees, this.state.sort);

    this.setState({ ...this.state, employees: filteredEmployees, filter: { ...searchCriteria } });
  };

  // Apply new sort criteria to the current employee selection  
  handleSortChanged = (sortCriteria) => {
    Employees.applySort(this.state.employees, sortCriteria);
    this.setState({ ...this.state, sort: { ...sortCriteria } });
  };

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />

        <Search
          filter={this.state.filter}
          columnDefinitions={ColumnDefinitions}
          handleFilterChanged={this.handleFilterChanged} />

        <Switch>
          <Route exact path="/CardView" render={() =>
            <CardView
              employees={this.state.employees}
              defaultSort={ColumnDefinitions.defaultSort()}
              handleSortChanged={this.handleSortChanged}
              imageFilePath={IMAGE_FILE_PATH} />} />
          <Route path="/" render={() =>
            <TableView
              sort={this.state.sort}
              columnDefinitions={ColumnDefinitions}
              handleSortChanged={this.handleSortChanged}
              employees={this.state.employees}
              imageFilePath={IMAGE_FILE_PATH} />} />
        </Switch>

        <Footer />
      </BrowserRouter >
    );
  }
}

export default App;
