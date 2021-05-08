import React from "react";
import "./Css/App.css";
import "./Css/Grid.css";
import "./Css/Responsive.css";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import { BrowserRouter as Router } from "react-router-dom";
import RouterUrl from "./Router";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <RouterUrl />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
