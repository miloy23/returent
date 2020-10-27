import React, { Component} from 'react';
import { Route, Switch, Link, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Login from "./login/loginForm";
import "./profilemy/css/animate.css";
import "./profilemy/css/style.css";
import "./profilemy/css/flexslider.css";
import "./profilemy/newstyle.css";
import "./profilemy/css/bootstrap.css";

import Home from "./home/home";
import Navbar from "./navbar/navbar";
import Contests from "./tutorial/contests";
import Codeforces from "./codeforces/codeforces";
import Register from "./login/registerFrom";
import Logout from "./logout";
import Notfound from "./notfound/notfound";

import './App.css';


class App extends Component {
	state={};
  	componentDidMount (){
  	try{
    	const jwty =localStorage.getItem("token");
    	const user =jwtDecode(jwty);
    	console.log(user);
    	this.setState({user});
    	}
    catch (ex){
    
    }
    };
    
  render() {
        return (
  

    <div>
   <Navbar user={this.state.user} />
    	<div>
    	
    	<Switch>
    	<Route path="/login" component={Login}/>
    	
    	
    	<Route path="/register" component={Register}/>
    	<Route path="/notfound" component={Notfound}/>
    	
    	<Route path="/home" exact component={Home}/>
    
    	
    	<Route path="/logout" exact component={Logout}/>
    	<Route path="/contests" exact component={Contests}/>
    	<Route path="/codeforces" exact component={Codeforces}/>
    	<Redirect to="/notfound"/>
    	</Switch>
    	

   	  </div>
    </div>
  )
  };
}

export default App;
