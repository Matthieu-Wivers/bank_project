import React from 'react';
import Header from './component/Header';
import TransactionForm from './component/TransactionBox';
import TransationDisplay from './component/TransationDisplay';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div style={{ paddingTop: '80px' }}>
        <TransactionForm />
        <TransationDisplay />
      </div>
    </div>
  );
};

export default App;
