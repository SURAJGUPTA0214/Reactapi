import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const Login=()=>{

    const[Email,SetEmail]=useState("");
    const[Password,SetPassword]=useState("");

    
    const[eyeIcon, setEyeIcon] = React.useState('far fa-eye');
    
    // const[data,setData] = React.useState({'fname'  d'';d'df';});

    let history = useHistory();
    const loginuser= async()=>{
        let item = {"Email":Email,"Password":Password}
        console.log(item);
        let rawresponse = await fetch(`http://127.0.0.1:8000/api/login`,
            {
                method:"POST",
                headers:{"Content-Type":"application/json", "value": "application/json", "Accept":"application/json"},
                body:JSON.stringify(item)
            }
         )
         let response = await rawresponse.json();
         console.log(response);
         history.push("/addproduct");
     }



    const myfun=()=>{
        const password = document.querySelector('#password');
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        setEyeIcon(eyeIcon === "far fa-eye" ? 'far fa-eye-slash' : 'far fa-eye');
    }

    return (
        <>
        <div class="d-flex justify-content-center regs align-items-center" style={{marginTop:'50px'}}>
        <div method="POST" style={{width:'375px'}}>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" value={Email} onChange={(e)=>SetEmail(e.target.value)} placeholder="Enter email" />
            </div>
           
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <div class="input-group mb-3">
                    <input type="password" class="form-control" value={Password} onChange={(e)=>SetPassword(e.target.value)} id="password" placeholder="Password" />
                    <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2"><i class={eyeIcon} id="togglePassword" onClick={myfun} /></span>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-primary" onClick={loginuser}>Submit</button>
        </div>
        </div>
        </>
    )
}
export default Login;