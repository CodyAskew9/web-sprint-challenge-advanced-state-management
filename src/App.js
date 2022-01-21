import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { fetchSmurfs } from "./actions";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = (props)=> {
 
  const { isLoading, error, fetchSmurfs } = props;

  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs])

  if (error) {
    return <h2> No smurfs for you! {error}</h2>
  }

  if (isLoading) {
    return <h2> Loading... </h2>
  }

  return (
    <div className="App">
      <Header />
      <main>
        <SmurfList/>
        <AddForm/>
      </main>
    </div>
  );
}

const mapToStateProps = (state) => {
  return ({
    isLoading: state.isLoading,
    error: state.error
  })
}

export default connect(mapToStateProps, { fetchSmurfs })(App);


//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.