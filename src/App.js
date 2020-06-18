import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Search from "./components/Search";
import ListView from "./pages/ListView";
import CardView from './pages/CardView';
import employees from "./employees.json";
import path from "path";

const IMAGE_FILE_PATH = path.join(process.env.PUBLIC_URL, "/images/employees/");

class App extends React.Component {

  state = { employees };

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Search />
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
