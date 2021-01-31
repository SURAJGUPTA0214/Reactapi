import react from 'react';
import reactdom from 'react-dom';
import { NavLink } from 'react-router-dom';


const Menu =()=>{
    return (
        <>
                <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav" style={{marginLeft:'auto'}}>
                    <NavLink to="/" exact activeClassName="active-class" > About Us</NavLink>
                    <NavLink to="/contact" exact activeClassName="active-class"> Contact Us</NavLink>
                    <NavLink to="/career" exact activeClassName="active-class"> Career</NavLink>
                    <NavLink to="/login" exact activeClassName="active-class"> Login</NavLink>
                    <NavLink to="/registration" exact activeClassName="active-class"> Registration</NavLink>
                    <NavLink to="/addproduct" exact activeClassName="active-class"> Add Product</NavLink>
                    <NavLink to="/useparam/suraj/gupta" exact activeClassName="active-class" > Useparam Page </NavLink>
                    </div>
                </div>
                </nav>
        </>
    )
}
export default Menu;