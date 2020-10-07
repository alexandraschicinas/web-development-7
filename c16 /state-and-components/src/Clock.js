import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    };

    tick = () => {
        this.setState({
            date: new Date(),
        });
    };

    componentDidMount() { // metoda - se pornesc intervale de timp se stabilesc conexiuni catre alte servere, se fac requesturi catre alte servere (fetch...)...;
        this.timerId = setInterval(
            () => this.tick(), 1000);
    };

    componentWillUnmount() { //mesaje de incheiere "Salut! Mersi ca ne-ai vizitat", se opreste intervalul, se opreste functia care ruleaza altfel la infinit
        clearInterval(this.timerId);

    }

    render() {
        return (
            <div>
                <h1> Hello! </h1>
        <h2> It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    };
};
// componenta de React - ceva viu , se naste = afisata pe ecran , face o actiune..., evolueaza in timp si reactionam la cum evolueaza si apoi dispare de pe ecran = moare = inchidem browserul...
// = lifecycle!
// primul moment din viata unei componente este render = scopul sa fie afisata pe ecran