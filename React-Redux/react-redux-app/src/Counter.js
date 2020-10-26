import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.decrement}> - </button>
        <span> My Counter:{this.props.value}</span>
        <button onClick={this.props.increment}> + </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    value: state.counter,
  };
};

const mapDispachToProps = (dispach) => {
  return {
    increment: () => dispach({ type: "INCREMENT" }),
    decrement: () => dispach({ type: "DECREMENT" }),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Counter);

//conect este o functie care ne va conecta couterul la redux-store;
// aceasta functie ia 2 parametrii:
//1. se numeste const mapStateToProps - ii zice lui React-redux ce sa ne dea din store; primeste un sg parametru care este state si returneaza un obj
// acest obj ca contine tot ii cerem lui reduc store ex valoare: value:state
// aceasta functie este primul parametru la connect
//2. componenta care se conecteaza = Counter
// sa ne transf state-ul din Redux in props

//mapDispachToProps- ne da acces la functia numita dispach
// dispach este un obj care primeste numai functii
//1. de increment
