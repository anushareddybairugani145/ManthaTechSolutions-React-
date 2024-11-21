import React from "react";  //Class based component - state Example -  this.setState
class Classbcstate extends React.Component{
    constructor() {
        super();
        this.state={
            username:"",
            password:""
        };
    }
        getData=(event)=>{
            var value=event.target.value
            var name=event.target.name
            this.setState({
                [name]:value
            })
        }
        submitData=(event)=>{
            event.preventDefault();
            console.log("final state",this.state)
        }
        render() {
            return(
                <div>
                    <form>
                        <input type='text' onChange={this.getData} name='username' /> <br></br>
                        <input type='password' onChange={this.getData} name='password'/> <br></br>
                        <button onClick={this.submitData} >Login </button>
                    </form>
                </div>
            );
        }
    }
export default Classbcstate