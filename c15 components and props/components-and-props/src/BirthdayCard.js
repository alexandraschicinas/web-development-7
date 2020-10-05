import React from "react"

const BirthdayCard = (props) => {
    //regula stricta in legatura cu props = props nu are voie sa fie modificat in interiorul functiei.
    // props e read-only- nu poate fi modificata!!
    // React ne ajuta sa creeam UI = componente de lego previzibile
    // props date in interior sunt read-only nu pot fi programate
    // e functie pura = fara side effects - tot timpul ne arata acelasi lucru
    return ( <div style = {{
        width: "200px",
        height: "200px",
        backgroundColor: props.gender === "male" ? "blue" : "red",
    }}>
        <h1>
Happy {props.age}th birthday, {props.name}!
        </h1>
    </div>
    )
}
export default BirthdayCard;