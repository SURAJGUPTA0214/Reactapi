import React, { useState } from "react";

const AddProduct=()=>{
    const[name,SetName]=useState("");
    const[file,SetFile]=useState("");
    const[description,SetDesc]=useState("");
    const[price,SetPrice]=useState("");

    const myfun=(event)=>{
        event.preventDefault();
        
        console.log(name, file,description,price);
        const registeruser= async()=>{
            let item = {Name:"Name",file:"Email",description:"Mobile",price:"Password"}
            console.log(item);
            const rawresponse = await fetch(`http://127.0.0.1:8000/api/product`,
                {
                    method:"POST",
                    headers:{"Content-Type":"application/json", "value": "application/json", "Accept":"application/json"},
                    body:JSON.stringify(item)
                }
             )
             rawresponse = await rawresponse.json();
             console.log(rawresponse);
         }
    }

    return (
        <>
         <div class="d-flex justify-content-center regs align-items-center" style={{marginTop:'50px'}}>
        <form method="POST" style={{width:'375px'}}>
            <div class="form-group">
                <label for="exampleInputEmail1">Email Name</label>
                <input type="text" class="form-control" value={name} onChange={(e)=>SetName(e.target.value)} placeholder="Enter product name" />
            </div>

            <div class="form-group">
                <label for="exampleInputEmail1">Enter Image</label>
                <input type="file" class="form-control" value={file} onChange={(e)=>SetFile(e.target.value)} placeholder="Enter product Image" />
            </div>

            <div class="form-group">
                <label for="exampleInputEmail1">Description:</label>
                <input type="text" class="form-control" value={description} onChange={(e)=>SetDesc(e.target.value)} placeholder="Enter Description" />
            </div>

            <div class="form-group">
                <label for="exampleInputEmail1">Price :</label>
                <input type="number" class="form-control" value={price} onChange={(e)=>SetPrice(e.target.value)} placeholder="Enter product price" />
            </div>
           
            
            <button type="submit" class="btn btn-primary" onClick={myfun}>Submit</button>
        </form>
        </div>

        </>
    )
}
export default AddProduct;