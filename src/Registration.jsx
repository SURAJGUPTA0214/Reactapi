import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { useHistory } from "react-router-dom";

const Registration=()=>{

    const[Name,Setnames]=useState("");
    const[Email,SetEmail]=useState("");
    const[Mobile,SetMobile]=useState("");
    const[Password,SetPassword]=useState("");
    const[ConfirmPassword,SetConpassword]=useState("");

    
    const[eyeIcon, setEyeIcon] = React.useState('far fa-eye');
    const[eyeIcon2, setEyeIcon2] = React.useState('far fa-eye');
    
    // const[data,setData] = React.useState({'fname'  d'';d'df';});
   

    let history = useHistory();
    const registeruser= async()=>{
        let item = {"Name":Name,"Email":Email,"Mobile":Mobile,"Password":Password,"ConfirmPassword":ConfirmPassword}
        console.log(item);
        let rawresponse = await fetch(`http://127.0.0.1:8000/api/registration`,
            {
                method:"POST",
                headers:{"Content-Type":"application/json", "Accept":"application/json"},
                body:JSON.stringify(item)
            }
         )
         rawresponse = await rawresponse.json();
         console.log(rawresponse);
        
         history.push("/login")
         
     }



    const myfun=()=>{
        const password = document.querySelector('#password');
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        setEyeIcon(eyeIcon === "far fa-eye" ? 'far fa-eye-slash' : 'far fa-eye');
    }
    const myfun2=()=>{
        const password = document.querySelector('#conpassword');
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        setEyeIcon2(eyeIcon2 === "far fa-eye" ? 'far fa-eye-slash' : 'far fa-eye');
    }

    return (
        <>
        <div class="d-flex justify-content-center regs align-items-center" style={{marginTop:'50px'}}>
        <div method="POST" style={{width:'375px'}}>
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" class="form-control" value={Name} onChange={(e)=>Setnames(e.target.value)}  placeholder="Enter email" />
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" value={Email} onChange={(e)=>SetEmail(e.target.value)} placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Mobile Number</label>
                <input type="number" class="form-control" value={Mobile} onChange={(e)=>SetMobile(e.target.value)} placeholder="Enter email" />
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
            <div class="form-group">
                <label for="exampleInputPassword1">Confirm Password</label>
                <div class="input-group mb-3">
                    <input type="password" class="form-control" value={ConfirmPassword} onChange={(e)=>SetConpassword(e.target.value)} id="conpassword" placeholder="Confirm Password" />
                    <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2"><i class="far fa-eye" id="togglePassword" onClick={myfun2}  /></span>
                    </div>
                </div>
            </div>      
            <button type="submit" class="btn btn-primary" onClick={registeruser}>Submit</button>
        </div>
        
        </div>
        </>
    )
}
export default Registration;