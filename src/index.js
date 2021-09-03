import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Contenedor from './Contenedor';
import Footer from './Footer';
import Header from './Header';

/*ReactDOM.render(
  <Header />,
  document.getElementById('Header')
);
ReactDOM.render(
  <Contenedor />,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('Footer')
);
**/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
reportWebVitals();
