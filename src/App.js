import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Search from "./components/Search";
import ListView from "./pages/ListView";
import CardView from './pages/CardView';
import employeeDatabase from "./employees.json";
import path from "path";

const IMAGE_FILE_PATH = path.join(process.env.PUBLIC_URL, "/images/employees/");

class App extends React.Component {

  state = { employees: employeeDatabase };

  executeSearch = (searchCriteria) => {
    const nameRegex = new RegExp(searchCriteria.name.trim(), 'i');
    const titleRegex = new RegExp(searchCriteria.title.trim(), 'i');
    const locationRegex = new RegExp(searchCriteria.location.trim(), 'i');
    const departmentRegex = new RegExp(searchCriteria.department.trim(), 'i');
    const filteredEmployees = employeeDatabase
      .filter(employee => {
        return nameRegex.test(employee.name)
          && titleRegex.test(employee.title)
          && locationRegex.test(employee.location)
          && departmentRegex.test(employee.department);
      });
    this.setState({ employees: filteredEmployees });
  };

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Search executeSearch={this.executeSearch} />
        <Route exact path="/" render={() =>
          <ListView employees={this.state.employees} imageFilePath={IMAGE_FILE_PATH} />} />
        <Route exact path="/CardView" render={() =>
          <CardView employees={this.state.employees} imageFilePath={IMAGE_FILE_PATH} />} />
        <Footer />
      </BrowserRouter >
    );
  }
}

export default App;
