import React from 'react';
import './dialog.css';

export default class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    };

    openDialog = () => {
        //wrong this.state.isOpen = true; 
        //correct:
        this.setState({
            isOpen: true,
        });
    };

    closeDialog = () => {
        this.setState({
            isOpen: false,
        });
    };
    render() {
        return (<div>
                    <button onClick = {this.openDialog}> Click for popup!</button>
                    {this.state.isOpen && <div className="dialog"> {/* conditional rendering */}
                     <button onClick = {this.closeDialog}> X </button>
                            Hey I am now here! </div>} 
                    
                 </div>
        );
    };
};