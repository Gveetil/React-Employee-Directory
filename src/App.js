import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Search from "./components/Search";
import ListView from "./pages/ListView";
import CardView from './pages/CardView';
import employees from "./employees.json";

class App extends React.Component {
  state = { employees };

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Search />
        <Route exact path="/" render={() => <ListView employees={this.state.employees} />} />
        <Route exact path="/CardView" render={() => <CardView employees={this.state.employees} />} />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
