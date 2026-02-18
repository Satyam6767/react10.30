// import { Component } from "react";

// class HomeClass extends Component{

//     constructor(){
//         super()
//         this.state = {
//             count : 0
//         }
//     }
//     increase = () =>{
//         this.setState({count: this.state.count+1})
//     }
//     render(){
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.increase} >click</button>

//             </div>
//         )
//     }
// }
// export default HomeClass;





// **************************************** compoentdidMount*********************************************** 


import React, { Component } from 'react'

export class HomeClass extends Component {


    // componentDidMount(){
    //     alert("component loaded successfully")
    // }







    // constructor() {
    //     super()
    //     this.state = {
    //         count: 0
    //     }
    // }
    // increase = () => {
    //     this.setState({ count: this.state.count + 1 })
    // }


    // componentDidUpdate(){
    //     alert("state change")
    // }









    constructor(){
        super();
        this.state = {
            count: 0
        }
    }


    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState({count:  this.state.count + 1})
        }, 1000)
    }


    componentWillUnmount(){
        setTimeout(()=>{
            clearInterval("this.interval")
        console.log("removed")
        }, 5000)
        
    }


    render() {
        return (
            <div>HomeClass

                <h1>{this.state.count}</h1>
                {/* <button onClick={this.increase} >click</button> */}
            </div>
        )
    }
}

export default HomeClass

































// class HomeClass => create component using class
// extends Component => use react features
// render () =>  Must be used  -> it return jsx



// constructor => used to initialize state
// super => used to call parent class
// this.state => stores data
// this.setState = >update data



// lifecycle method => class component have some methods that runs automatically

//  Method                    detail                   phase
// 1. ComponentDidMount() => when component load =>        mounting
// 2. ComponentDidUpdated()  => when state change=>        updating
// 3  ComponentWillUnmount() => when component remove     unmounting


