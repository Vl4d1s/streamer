import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const pageOne = () => {
  return <div>PageOne</div>;
};

const pageTwo = () => {
  return <div>PageTwo</div>;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={pageOne} />
          <Route path="/pagetwo" exact component={pageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
