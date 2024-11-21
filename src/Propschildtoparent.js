import React, {useState} from 'react';

function Propschildtoparent({sendFormToParent}) {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');


    const handelSubmit = (e) => {
        e.preventDefault();
        console.log({username,email});
    };

    return (
        <div> <form onSubmit={handelSubmit}> <label> username : <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} /></label> <br></br>
                <label> email : <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} /></label> <br></br>
                <button type="submit">Submit</button>
            </form> </div>
    );


}
export default Propschildtoparent;


/* import Propschildtoparent from "./Propschildtoparent";


function App() {
  const[userData, setUserData] = useState({ username: '', email: ''});

  const handleFormData = (data) => {
    setUserData(data);
  };

  return(
    <div> 
      <p>Email: {userData.name}</p>
      <p>username:{userData.email}</p>
      <Propschildtoparent sendFormDataToParent={handleFormData} />
    
  </div>
    );
  
}

export default App;*/