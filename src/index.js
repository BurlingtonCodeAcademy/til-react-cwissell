import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Facts = () => {
  return <h1>Hi from Facts!</h1>
}

let component;
if (document.location.pathname === "/facts") {
  component = <Facts />;
} else {
  component = <App />
}

ReactDOM.render(component, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
