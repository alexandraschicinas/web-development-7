import React from "react";
import {Link, useParams, useHistory} from "react-router-dom"

const usersList = [
    {
        id:1
    },
    {
        id:2
    },
]
export const Users = (props) => {
    const {id} = useParams(); // using Hooks, without hooks we use props and props.match.params.id
    const history= useHistory();//putem manipula istoricul userului

    const handleClick = () => {
        history.push('/');
    }
    return(
    <div>
        <button onClick = {handleClick}>Go Home</button>
<h2> Users Page{id}</h2> 
{/* {props.match.params.id} */}
<ul>
    {usersList.map((user) => (
        <li key ={user.id}>
            <Link to={`/users/${user.id}`}>User{user.id} </Link>
        </li>
    ))}
  {/* <li><Link to="/users/1">User 1</Link></li>  
   <li><Link to="/users/2">User 2</Link></li>  */}

</ul>
</div>
)}