import React from 'react';
import './App.css';
import MyContext from './MyContext';
import { Organisim } from './Organisim';

const App = () => {

  const getRandomNumber = (maximum) => {
    return Math.floor(Math.random() * maximum);
  };

  const contextData = {
    firstName: "John",
    lastName: "Doe",
    profession: "Software Engineer",
    randomFunc: getRandomNumber,
  }

  return (
    <MyContext.Provider value={ contextData }>
      <div className="app">
        <h1 className="heading">Context Demo</h1>
        <Organisim />
      </div>
    </MyContext.Provider>
  );
}

export default App;
