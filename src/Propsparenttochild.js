import React from 'react';

function Propsparenttochild({username , email}) {
    return ( 
        <div>
        <p> username: {username}</p>
        <p> email: {email}</p>
        </div>
    );
}
export default Propsparenttochild;
//app.js
/* import React,{ useState } from 'react';
import Propsparenttochild from './Propsparenttochild';


function App() {
  const [userData] = useState({
    username: 'anushareddy',
    email: 'anusha@123'
  });
  return (
      <div>
        <Propsparenttochild  username={userData.username} email={userData.email} />
      </div> 
  ); 
  }
  export default App;*/