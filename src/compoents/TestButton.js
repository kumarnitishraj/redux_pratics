import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions';

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
    buttonClick = ()=> {
        this.setState({
            count:this.state.count+1,
        })
    }

    loginClick = () =>{
        const { login } = this.props;
        let params ={
            email:'tapas@ca.com',
            password:'123'
        }
        login(params);
    }



    render(){
        const { counter, increaseCounter } = this.props;
        return(
            <div>
                 {/* DISPATCH ACTION TO INCREASE THE COUNT */}
                <h1>{counter.count}</h1>
                <button onClick={()=>increaseCounter()}>Count +</button>

                {/* DISPATCH ACTION FOR API CALL ON CLICK THIS BUTTON USING REDUX MIDDLEWARE THUNKS*/}
                <h1>{counter.loadingStatus?'Loading':''}</h1>
                <button onClick={()=>this.loginClick()}>Login API Call</button>
            </div>
        )
    }
}

//  GET STATE FROM STORE AND DISPATCH ACTION 
const mapState = (state, ownProps)=>{
    return{
        counter : state.counter
    }
}

const mapDispatch = (dispatch, ownProps) =>{
    return{
        increaseCounter:()=>{
            dispatch({
                type:'BUTTON_CLICKED'
            })
        },
        login: (params)=>{
            dispatch(loginUser(params))
        }
    }
}

export default connect(mapState, mapDispatch)(App);
