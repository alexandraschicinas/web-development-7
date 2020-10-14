import React, { useEffect, useReducer, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import useDocumentTitle from './useDocumentTitle';

//use reducer se creeaza inafara lui app ca sa fie mai vizibila

function reducer(state, action) {
  // must always return a valid state; loc bun sa aruncam erori
  switch (action.type) {
    case `increment`: {
      return { count: state.count + 1 };
    }
    case `decrement`: {
      return {count: state.count - 1};
    }
    case `reset`:{
      return { count: 0}
    }
    default: {
      //else
      return state;
    }
  }
}

function App() {
  //comp functionala
  // const [count, setCount] = useState(0);
  // ia un singur parametru, starea initiala
  const [state, dispatch] = useReducer(reducer, { count: 0 }); // reducer= functia pe care sa o execute, mai sus mentionata, al doilea parametru este parametrul care se modifica si se scrie ca obiect in statea initiala;
  const [name, setName] = useState("Cosmin");
  const [date, setDate] = useState(new Date());
  useDocumentTitle("My page");
  //toate hooks-urile sunt functii
   //al doilea parametru e cel care se schimba.
  useEffect(() => {
    const intervalid = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(intervalid); // functie de clean out;
    };
  }, [date]);

  return (
    <div>
      <p>
        {name} clicked {state.count} times at {date.toLocaleTimeString()}.
      </p>
      <button
        onClick={() => {
          //setCount({count+1})
          dispatch({ type: "increment" }); // dispacth ne ajuta sa trimitem actiuni catre reducer, actiunea de timp increment la reducer;
          //reducer trebuie sa returneze un state;
          setName("Some other name");
        }}
      >
        Click me!
      </button>
      <button onClick={() => dispatch({type: "decrement"})}> - </button>
      <button onClick={() => dispatch({type: "reset"})}> Reset </button>
    </div>
  );
}

export default App;
