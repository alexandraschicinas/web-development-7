import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";
import store from "./store";

class App extends Component {
  state = {
    // totalAmount: 2500701,
    username: "Janny",
  };

  handleWithdraw = (amount) => {
    // this.setState((prevState) => ({
    //   totalAmount: prevState.totalAmount - amount,
    // }));
    const withdrawAction = {
      type: "withdraw",
      amount: amount,
    };
    store.dispatch(withdrawAction);
  };

  render() {
    const { totalAmount } = store.getState();
    const { username } = this.state;
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button onClick={() => this.handleWithdraw(10000)}>
            WITHDRAW $10,000
          </button>
          <button onClick={() => this.handleWithdraw(5000)}>
            WITHDRAW $5,000
          </button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}

export default App;
