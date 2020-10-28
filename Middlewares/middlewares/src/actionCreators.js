//denumire funchy pt o functie a carui rol este sa returneze un obj;

export const decrement = () => {
    return{
        type: 'DECREMENT',
    };
};
// scad sansele de a gresi

 const startLoading = () => {
    return {
        type: 'START_LOADING',
    }
};

const getStarWarsCharacterSuccess = (character) => {
    return {
        type: 'GET_STAR_WARS_CHARACTER_SUCCESS',
        character,
    };
};
const getStarWarsCharacterError = (errorMessage) => {
    return {
        type: 'GET_STAR_WARS_CHARACTER_ERROR',
        errorMessage,
    };
};

export const getStarWarsCharacter = (characterId) =>{
    return async (dispatch, getState) => {
            dispatch(startLoading());
            try {
                const response = await fetch (`https://swapi.dev/api/people/${characterId}`)
                const data = await response.json();
                dispatch(getStarWarsCharacterSuccess(data));
                // try, catch - e f bn sa fie folosite la https request si ajuta la 
            } catch (error) {
                dispatch(getStarWarsCharacterError(error.message))
            }
    }
}