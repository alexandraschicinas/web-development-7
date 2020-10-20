import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Users} from './Users.js'
import {NavBar} from './NavBar.js'

// const Home = (props) => <h2>Home {props.name}</h2>;
const Home = () => <h2>Home Page</h2>
const About = () => <h2>About Page </h2>

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Switch>
      {/* <Route path="/" render={() => <Home name="Alexandra" />}/>  */}
      <Route exact={true} path='/' component={Home} />
      {/* numele functiei de react */}
      <Route path="/about" component={About}/>
      {/* propsul de exact spune browserului ca exact componenta asta sa fie aratata pe ecran */}
      <Route path="/users/:id" component={Users}/>
      <Route path="/users/" component={Users}/>
    </Switch>
      
    </BrowserRouter>
    
  );
}

export default App;
