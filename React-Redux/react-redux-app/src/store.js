import {createStore} from 'redux';

//const initialState = 0;
const initialState = {
    counter: 0,
    emailList : [
        { id: 1, author: 'Amy Aniston', subject: 'Hello from Amy', body: 'Hi! This is Amy. How are you?' },
        { id: 2, author: 'Bernadett Benetton', subject: 'Hello from Bernadett', body: 'Hi! This is Bernadett. How are you?' },
        { id: 3, author: 'Carol Crowford', subject: 'Hello from Carol', body: 'Hi! This is Carol. How are you?' },
        { id: 4, author: 'Diana Dacy', subject: 'Hello from Diana', body: 'Hi! This is Diana. How are you?' },
        { id: 5, author: 'Emily Edwards', subject: 'Hello from Emily', body: 'Hi! This is Emily. How are you?' },
      ],
}

const counterReducer=(state, action) => {
    switch(action.type) {
        case 'INCREMENT':
            // return state+1;
            return {
                ...state,
                counter: state.counter + 1,
            }
        case 'DECREMENT':
            // return state -1;
            return {
                ...state,
                counter: state.counter - 1,
            }
        case "ARCHIVE":
            return {
                ...state,
                emailList: state.emailList.map((email)=>{
                    if(email.id === action.id) {
                        return{
                            ...email,
                            isArchived: true
                        }
                    }
                    return email;
                })
            }
        case "DELETE" :
            return{
                ...state,
                emailList: state.emailList.filter((email) => {
                    //filter returneaza true/false
                    if(email.id===action.id){
                        return false;
                    }
                    return true;
                })
            }
        default:
            return state;

    }
}

const store = createStore(counterReducer, initialState)

export default store;