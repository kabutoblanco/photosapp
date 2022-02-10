import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

import Routing from './Routing';

//REDUX
import { Provider } from 'react-redux';
import store from '../store';

// ADMINISTRATION
const Alert = lazy(() => import('./layout/Alerts'))
import ProgressAction from './layout/ProgressAction';

//ALERTS
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <ProgressAction />
          <Alert />
          <div className='App'>
            <Routing />
          </div>
        </AlertProvider>
      </Suspense>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
