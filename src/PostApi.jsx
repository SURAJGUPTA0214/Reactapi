import react from "react";
import reactdom from "react-dom";

const PostApi =() =>{
//  constructor(){
//      super();
//      this.state={
//          name:"",
//          salary:"",
//          age:""
//      }
//  }


    const submitfun =()=>{
        alert("hi");
    }
    return(
        <>
            <h1> POST API </h1>

            <form> 
                <input type ="text" name="name" value={this.state.name} onChange ={ (data)=>{ this.setState({name:data.target.value}) } } placeholder="Enter Name" /><br />
                <input type ="number" name="salary" value={this.state.salary} onChange ={ (data)=>{ this.setState({salary:data.target.value}) } } placeholder="Enter Salary" /><br></br>
                <input type ="number" name = "age" value={this.state.age} onChange ={ (data)=>{ this.setState({age:data.target.value}) } } placeholder="Enter Age" /><br></br>
                <button onClick={submitfun}> Submit </button>

            </form>

        </>
    )
}
export default PostApi;