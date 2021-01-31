import React from 'react';
import ReactDOM from 'react-dom';
import About from './Route/About';
import Career from './Route/Career';
import Contact from './Route/Contact';
import Error from './Route/Error';
import { BrowserRouter, Route, Link, Router, Switch } from "react-router-dom";
import Menu from './Route/Menu'
import './index.css';
import {useParams} from 'react-router-dom';

const Useparam=()=>{
    const {fname,lname} = useParams();
    return(
        <>
            <h1>My name is {fname} {lname} </h1>
        </>
    );
};
export default Useparam;