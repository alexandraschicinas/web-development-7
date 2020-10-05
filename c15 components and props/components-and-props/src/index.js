import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App'
// import { Clock } from './clock';
// import BirthdayCard from './BirthdayCard';
import * as serviceWorker from './serviceWorker';

// o componenta este o functie care returneaza cod jsx -conceptual- accepta un songur parametru numit props! tot timpul este numit props!!
// component functionala!!!
// function Welcome(props) {
// return <h1>Hello, {props.name}</h1>;
// }

// const Welcome = (props) => <h1>Hello, {props.name}</h1>
// numele functiilor trebuie scrise cu litera mare obligatoriu, altfel le confunda cu tag-urile de html;

//componente de tip clasa

// class Welcome extends Component{
//   render (){
//   return <h1>Hello, {this.props.name}</h1>;
//   }
// }
// ca sa functioneze componentele de tip clasa este obligatoriu sa scriem dupa numele clasei extens component de la react
// are o metoda obligatorie - render()- ajuta la return;

// ceas care accepta o singura proprietate- timezone;

ReactDOM.render(
  <React.StrictMode>
    {/* <Welcome name = "Alexandra" /> 
     asa se cheama/foloseste o functie/componenta in react */}
    {/* <Welcome name = "Alex" /> 
    <Welcome name = "Ana" />   */}
    {/* <Clock timezone = "America/Los_Angeles"/>
    <Clock timezone = "Asia/Tokyo"/>
    <Clock timezone = "Pacific/Guam"/>
    <BirthdayCard gender = "female" name = "Alexandra" age = "30"/>
    <BirthdayCard gender = "male"   name = "Radu" age = "27"/>
    <BirthdayCard gender = "female"   name = "Ana" age = "50"/> */}
    <App/>

  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
