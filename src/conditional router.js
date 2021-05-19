import React from 'react';
import ReactDOM from 'react-dom';
import Login from './router'
import ToDoApp from "./ToDoApp"
function UserGreeting(props) {   
    return <Login/>; 
} 
function GuestGreeting(props) {   
    return <ToDoApp/>; 
} 
function Greeting(props) {   
    const isLoggedIn = props.isLoggedIn;
   if (isLoggedIn) {
      return <GuestGreeting />;
   }
   return <UserGreeting />; 
} 
ReactDOM.render(   
    <Greeting isLoggedIn={false} />,
    document.getElementById('root') 
);
export default Greeting;