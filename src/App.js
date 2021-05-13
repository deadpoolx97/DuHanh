import React from "react";
import "./Css/App.css";
import "./Css/Grid.css";
import "./Css/Responsive.css";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import { BrowserRouter as Router } from "react-router-dom";
import RouterUrl from "./Router";
import store from "./App/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <RouterUrl />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
