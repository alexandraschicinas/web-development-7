import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getStarWarsCharacter } from './actionCreators';

export const Character = () => {
    const isLoading = useSelector((state)=> state.isLoading);
    const character = useSelector((state)=> state.character);
    const dispatch = useDispatch();
    const errorMessage = useSelector((state)=> state.errorMessage)

    useEffect(()=> {
        dispatch(getStarWarsCharacter(1));
    },[]);
    if(errorMessage !== undefined) {
    return<p style = {{color:"red"}}>{errorMessage}</p>
    }
    return  isLoading === true ? (<p> Loading...</p>) : 
    (<div>
        <p>{character.name}</p>
    <p>{character.birth_year}</p>
    <p>{character.height}</p>
    <p> {character.eye_color}</p>
    </div>)
}