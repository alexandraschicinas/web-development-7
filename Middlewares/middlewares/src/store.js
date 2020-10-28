import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk';

const initialState = { // stocheaza valoarea initiala
    value: 0,
    isLoading:false,
    character:{},
};

const rootReducer = (state, action) => { // se ocupa de schimbat store
    switch (action.type) {
        case 'INCREMENT':
        return {
            ...state,
            value:state.value + 1,
        }
        case 'DECREMENT':
            return{
                ...state,
                value: state.value - 1 ,
            }
        case 'START_LOADING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_STAR_WARS_CHARACTER_SUCCESS':
            return {
                ...state, 
                // ... ia o lista si o insiruie - poti adauga /sterge proprietati
                character: action.character,
                isLoading:false,
            }
        case 'GET_STAR_WARS_CHARACTER_ERROR':
            return {
                ...state,
                errorMessage: action.errorMessage,
                isLoading:false,
            }
        default:
            return state;

    }
}



// const logger = store => next => action => {
//     console.log('dispatching:', action)
//     const result = next(action);
//     console.log('next.state', store.getState());
//     return result;
//}
//functioneaza pe baza unui procedeu curry -  functii de tip curyy sunt functii care returneaza alte functii
// store si nex sunt parametrii
// apoi ne da accex la actiune care o primeste chiar si reducerul
//functia de next face 2 chestii: 1. duce actiunea catre reducer
//next paseaza actiunea de la micdleware la middleware
//middleware actual poate loga in consola actiunile, are acces la store, poate da actiunea mai departe
//loggerul se pune la final
const logger = createLogger();

//functie thunk 
//const a = 1+2; => js atribuie automat val 3 
// astfel fct thunk este mai funchy const = () => 1+3 - deci a este evaluata cand vrem noi, cand apelam functia;


const store =createStore(rootReducer, initialState, applyMiddleware(thunk,logger));
export default store;