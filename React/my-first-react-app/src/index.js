import React from 'react'; // dependinte
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import "./index.css";

const  user = {
  firstName : "Alexandra",
  lastName : "Chicinas"
}

// const formatName = (user) => {
//   return user.firstName + " " + user.lastName;
// }

// const now = new Date();
// function tick() {
//   const element = (
//     <div>
//       <h1> Hello, what's the clock?</h1>
//       <h2> It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   )
//   ReactDOM.render(element, document.getElementById("root"));
// }
// setInterval(tick,1000)

// const string = "something ${2+2}"
ReactDOM.render(
  <React.StrictMode>

    <h1> 
      {user.firstName} {user.lastName}
      {formatName(user)}
      {/* //  {now.toLocaleTimeString} 
    // </h1> ,
     */}

  //   {/* sintaxa jsx */},
  // </React.StrictMode>,
//   document.getElementById('root')
// );

// const imageUrl = "https://images.unsplash.com/photo-1601150098471-406cd38082fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
// ReactDOM.render(
//   <div className = "container">
//   <img src = {imageUrl}/>
//   <img src = "https://images.unsplash.com/photo-1601277237358-93d22efff93f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"/>
//   </div>,
//   document.getElementById("root")
// )

const element = <h1 className = "container"> Hello guys! </h1>
// babel scrie 
// const element = React.createElement(
//   "h1", {
//     className : "container"
//   },
//   "Hello!"
// );

ReactDOM.render(element, document.getElementById("root"));
//this is compilation, parsing..


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
