import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SwitchExample from "./SwitchExample";
import {NumberList} from "./NumberList"
import { InventorsList } from "./InventatorsList";
import NameForm from "./NameForm";

function myFunction(name, event) {
  console.log("hello " + name + "!");
  console.log(event);
}

function App() {
  return (
    <div>
      {/* <button onclick="myFunction()">Old Style</button> */}
      <button onClick={(event) => myFunction("Cosmin", event)}>
        New Style
      </button>
      {/* pasam o referinta {myFunction} nu o apelam, nu o executam- e data mai departe ca si cum ar fi o variabila */}
      {/* daca este scrisa {myFunction()} se apeleaza instant nu cand e apasat butonul */}
      {/* ca sa dam parametri unei functii in react putem crea un arrow function in paranteze */}
      {/* {event este util cand scriem in inputuri} */}

      <button onClick={myFunction.bind(this, "Cosmin")}>Bind me!</button>
      {/* bind face o copie la functie , pune this functiei app si ii putem da oricati parametrii- se foloseste la a da parametrii mai departe */}
      <SwitchExample />
      <NumberList />
      <InventorsList />
      <NameForm />
    </div>
  );
}

export default App;
