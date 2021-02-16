import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const pageOne = () => {
  return (
    <div>
      <Link to="/pagetwo">PageTwo</Link>
    </div>
  );
};

const pageTwo = () => {
  return (
    <div>
      <Link to="/">PageOne</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          {/* exact == exact={true} */}
          <Route path="/" exact component={pageOne} />
          <Route path="/pagetwo" exact component={pageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
