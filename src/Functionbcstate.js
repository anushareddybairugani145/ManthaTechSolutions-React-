import React, {useState} from 'react'; // example of function base component  in useState 

function Functionbcstate() {
    const [name , setName] = useState("");
    const [email,setEmail] = useState("");

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}\n Email: ${email}` );   //alert pop up
    };

    return (
        <form onSubmit={handelSubmit}>
            <div>
                <label> Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> </label>
                <label> Email <input type="email" value={email} onChange= {(e) => setEmail(e.target.value)}/> </label>

            </div>
            <button type="submit">Submit</button>
            </form>
    );
}
export default Functionbcstate;
