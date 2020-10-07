import React from "react";
import moment from "moment-timezone";

export const Clock = (props) => {
 return <h1> The time is {moment().tz(props.timezone).format()}</h1>
};