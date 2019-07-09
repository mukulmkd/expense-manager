import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/landing/Landing';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="App">
        <Route exact path="/" component={Landing} />
            {/* <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/home" component={Home} />
            </Switch> */}
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
