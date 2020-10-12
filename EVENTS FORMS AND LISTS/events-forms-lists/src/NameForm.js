import React from 'react';

export default class NameForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName:"",
            lastName: "",
            gender:"female",
        }// valori de inceput text gol, zero ...
    }
    // pt fiecare input o functie de handle care schimba continutul
    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value,
        })
    };
    handleLastNameChange= (event) => {
        this.setState({
            lastName: event.target.value
        })
    };
    handleGender= (event) => {
        this.setState({
            gender:event.target.value
        })
    }

    // submit ca sa trim continutul undeva
    handleSubmit = (event) => {
        alert("A name was submitted:" + this.state.firstName +" "+ this.state.lastName + " " + this.state.gender);
        event.preventDefault(); //nu schimba pagina
    }


    render() {

        return (
            <form 
            // onSubmit={this.handleSubmi}
            > 
            {/* cand apasa pe enter ce intampla functia */}
                <label>
                   First Name:
                    <input type="text" placeholder="Enter name..."
                    value={this.state.firstName}
                    onChange={this.handleFirstNameChange}/>
                    {/* cand se schimba numele se apeleaza */}
                </label>
                <label>
                   Last Name:
                    <input type="text" placeholder="Enter last name..."
                    value={this.state.lastName}
                    onChange={this.handleLastNameChange}/>
                    {/* cand se schimba numele se apeleaza */}
                </label>
                <label>
                    Gender:
                    <select value={this.state.gender} onChange={this.handleGender}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    {/* valoare e submitted nu ce scrie pe ecran */}
                    </select>
                
                </label>
                <input type="submit" onClick={this.handleSubmit}/>
             

            </form>

            
        )
    }
}