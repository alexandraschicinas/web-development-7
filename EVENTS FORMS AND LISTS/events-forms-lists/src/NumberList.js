import React from 'react';

//  const numbers = [1, 2, 3, 4, 5];

 const toDos = 
    [ {id:1,
     name:"first to do",
    },

     {
         id: 2,
         name: "second to do",
     },
 ]

 export const NumberList = (props) => {
    return (
        <ul>
            {toDos.map((todo) => (
                <li key={todo.id}>{todo.text}</li>
                // daca e toString fara paranteze nu e functie si se paseaza prin referinte keya, e aceeasi cheie;
                // cand e cu paranteze vrem rezultatul acelei functii => e diferit de fiecare data;
                ))}
                {/* are nevoie de o cheie ca sa stie sa le identifice mai ales cand sunt mai multe elemente
                astfel e nevoie de un key unica*/}
                {/* map ia o lista existenta si da o alta lista transf cf functiei/ parametrilor ei */}
        </ul>
    )
}