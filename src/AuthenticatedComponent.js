import React, {Component, useState} from "react";
import {withRouter} from "react-router-dom";
import axios from 'axios';
import AdminLogin from "./components/Pages/AdminLogin/AdminLogin";

const API = 'http://localhost:3002/api';
const DEFAULT_QUERY = '/auth';

class AuthenticatedComponent extends Component{
    state = {
        redirect: false,
        isLoading:false
    }


    refresh = ()=> {
        this.setState(()=>{
            return(
                {
                    redirect: true,
                }
            )
        })
    }


    constructor(props) {
        super(props);
        this.state={
            user:undefined
        }
    }
    componentDidMount(){

        const jwt = localStorage.getItem('cool-jwt');
        if(!jwt){
            console.log('no jwt')
            this.props.history.push("/admin")

        }
        else{
        axios.get(API + DEFAULT_QUERY, {
            headers :{authorization : `Bearer ${jwt}`}})
            .then(res=>this.setState({
            user: res.data
         }))
            .catch(err=>
        {
            console.log(err.message);
            localStorage.removeItem('cool-jwt');
        })}}

    render(){
        if(this.state.user == undefined){
            return(
                <AdminLogin refresh = {this.refresh}  />
            )
        }else {
            return (
                <div>{this.props.children}</div>
            )
        }
    }
}

export default withRouter(AuthenticatedComponent);