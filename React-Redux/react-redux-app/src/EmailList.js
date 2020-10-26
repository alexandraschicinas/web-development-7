import React from "react";
import { useDispatch, useSelector } from "react-redux";

const EmailList = () => {
    const dispatch = useDispatch();
  const emailList = useSelector((state) => state.emailList);
  

  return emailList.map((email) => (
    <div key={email.id} 
         style = {{
         backgroundColor: email.isArchived === true ? "green" : "white",
    }}>
        <button onClick={() => dispatch({ type: "ARCHIVE", id: email.id})}>
            ARCHIVED
        </button>
        <button onClick={() => dispatch({ type: "DELETE", id: email.id})}>
            DELETE
        </button>
      <p> From: {email.author}</p>
      <p> Subject: {email.subject}</p>
      <p> Email message: {email.body}</p>
    </div>
  ));
};

export default EmailList;
