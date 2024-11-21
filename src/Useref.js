import { useState,useEffect, useRef } from "react";

function Useref() {
    const[inputValue,setInputValue] =useState("");
    const count = useRef(0);
    useEffect(() =>{
        count.current=count.current+1;
    })

        return(
            <> 
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
            <h1>Render Count : {count.current}</h1>
            </>
        )

}
export default Useref;

/* import './App.css';
import Useref  from './Useref';
function App() {
    return (
        <div className="App">
         <Useref></Useref>
        </div>
    );
}
export default App;*/