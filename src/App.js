import React from 'react';
import ReactDOM from 'react-dom';
import About from './Route/About';
import Career from './Route/Career';
import Contact from './Route/Contact';
import Login from './Login';
import Registration from './Registration';
import Error from './Route/Error';
import { BrowserRouter, Route, Link, Router, Switch } from "react-router-dom";
import Menu from './Route/Menu'
import './index.css'
import Useparam from './Useparam';
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import AddProduct from "./AddProduct"

const App=()=>{
    return(
        <>
        <Menu /> 
        <Switch> 
            <Route exact path="/" component={About} />
            <Route path="/career" component={Career} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route exact path="/addproduct" component={AddProduct} />
            <Route path="/useparam/:fname/:lname" component={Useparam} />
            <Route component={Error} />
        </Switch>
        

        </>
    );
};
export default App;