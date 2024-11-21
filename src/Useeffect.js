import React, {useEffect, useState } from 'react';
function Useeffect() {

const [count, setCount] =useState(0);

useEffect ( () => {
    setTimeout( () =>{
        setCount((count) => count+1);
    },1000);
},[]);
//[] empty array- mounting component adds to dom- 
//if not there empty array it goes into infinity loop


    return (
        <div>
            <h2> useEffect hook</h2>
            <h3> i have rendered {count} times!</h3>
            <h3>i have rendered {count} time!</h3>
        </div>
    )
}
export default Useeffect;


/*import './App.css';
import  Useeffect from './Useeffect';
function App() {
    return (
        <div className="App">
          <Useeffect></Useeffect>
        </div>
    );
}
export default App;*/