import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Routing from './Routing';

//REDUX
import { Provider } from 'react-redux';
import store from '../store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Routing />
      </div>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
