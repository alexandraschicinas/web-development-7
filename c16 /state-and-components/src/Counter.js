import React from 'react';

export default class Counter extends React.Component{ // extends React.Component ne ofera acces la setState
    constructor(props) {//acea metoda care se apeleaza cand se scrie new Counter()
        super(props); // accesam metode, proprietati, constructor - e cuv rezervat
        this.state = {
            //state este un obiect mereu
            // this is the initial state/snapshot of the component
            counter:0,
        }
    }

    increment = () => {
            this.setState((previousState)=> {
                return {
                    counter: previousState.counter + 1,
                }
            })
            //{counter: 1}
    }

    decrement = () => {
        this.setState((previousState)=> {
            return {
                counter: previousState.counter - 1,
            }
        })
    }

    render() {
        return (
        //se ocupa de pus jsx pe pg
        <div>
            <button onClick= {this.increment}> + </button>
            {this.state.counter}
            <button onClick = {this.decrement}> - </button>
        </div>
        );
    }
}