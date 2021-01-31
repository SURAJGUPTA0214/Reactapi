import react, { useState } from "react";
import reactdom from "react-dom";

const RegsApi =() =>{

    const [name, setname] = useState();
    const [password, setpassword] = useState();
    const [email, setemail] = useState();

    const submitfun =(e)=>{
        e.preventDefault();
       // alert("hi");
        let item = { name,password,email }
        console.warn(item);
        // Sending Data to backend startrs //
        let result = fetch("URL" , { method :"POST" , headers : {"content-Type" : "application/json" , "Accept" : "application/json"}, body : JSON.stringify(item)});
        result =  result.json();
    }
    return(
        <>
            <h1> POST API </h1>
            <form> 
                <input type ="text" name="name" value={name} onChange ={ (event)=>setname (event.target.value)} placeholder="Enter Name" /> <br />
                <input type ="password" name="password" value={password} onChange ={ (event)=>setpassword (event.target.value)} placeholder="Enter Password" /> <br />
                <input type ="email" name = "email" value={email} onChange ={ (event)=>setemail (event.target.value)} placeholder="Enter Email" /><br />
                <button onClick={submitfun}> Submit </button>

            </form>
        </>
    )
}
export default RegsApi;