import React from "react";

class Lifecyclecomponent extends React.Component{
    constructor(props){
        super(props);
        console.log("Constructor: Component is being initialized");
    }
    componentDidMount() {
        console.log("componentDidMount: component is created and added to DOM");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate: component has been updated");

    }
    componentWillUnmount(){
        console.log("componentWillUnmount: component is about to be removed from DOM");

    }
    render() {
        console.log("component is rendering");
        return <h1>phases of lifecycle</h1>

    }
}
export default Lifecyclecomponent;



/* import './App.css';
import Lifecyclecomponent from './Lifecyclecomponent';
function App() {
    return (
        <div className="App">
            <h2>Life Cycle of React</h2>
            <Lifecyclecomponent></Lifecyclecomponent>
        </div>
    );
}
export default App;*/