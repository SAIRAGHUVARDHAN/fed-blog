import React, { Component } from 'react';  
  
class Lifecycle extends React.Component {  
   constructor(props) {  
      super(props);  
      this.state = {hello: "React"};  
      this.changeState = this.changeState.bind(this)  
   }    
   render() {  
      return (  
         <div>  
             <h1>Component's Lifecycle</h1>  
             <h3>{this.state.hello}</h3>  
             <button onClick = {this.changeState}>Click Here</button>          
         </div>  
      );  
   }
    componentWillMount(){ 
    console.log('Component will Mount!')
    }
   componentDidMount(){  
        console.log('Component did Mount')
    }
   changeState(){  
      this.setState({hello:"The button is clicked"});  
   }  
   componentWillReceiveProps(newProps) {      
      console.log('Component Will Recieve Props!')  
   }  
   shouldComponentUpdate(newProps, newState) {  
   return true;  
   }  
   componentWillUpdate(nextProps, nextState) {  
      console.log('Component Will UPDATE!');  
   }  
   componentDidUpdate(prevProps, prevState) {  
      console.log('Component Did UPDATE!')  
   }  
   componentWillUnmount() {  
      console.log('Component Will UNMOUNT!')  
   }
 }
export default Lifecycle; 