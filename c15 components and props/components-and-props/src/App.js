// punctul de intrare in aplicatia noastra de React
import React from 'react';
import { Clock } from './clock';
import BirthdayCard from './BirthdayCard';

 const App = (props) => {
     return ( <>
     <Clock timezone = "America/Los_Angeles"/>
    <Clock timezone = "Asia/Tokyo"/>
    <Clock timezone = "Pacific/Guam"/>
    <BirthdayCard gender = "female" name = "Alexandra" age = "30"/>
    <BirthdayCard gender = "male"   name = "Radu" age = "27"/>
    <BirthdayCard gender = "female"   name = "Ana" age = "50"/>
    </>
     );
    // element gol de React, se afiseaza doar ce e inauntru;
 };
 export default App;