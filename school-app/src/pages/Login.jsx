import { useState } from "react";
import * as React from 'react';
export default function Login ( ) {
    const [name,setName] = useState("");
    const[role,setRole] = useState("Student");
    const handlechange =(e)=>
        setName(e.target.value);
    const handleRoleChange=(e)=>
        setRole(e.target.value);
    const handleclick=(e)=>{
          e.preventDefault();
        console.log(name,role);
    localStorage.setItem("name",name);
    localStorage.setItem("role",role);
}
    return(
       
         <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f2f2f2"
      }}
    >
    <form onSubmit={handleclick}style={{display:"flex", flexDirection: "column",height:"400px",justifyContent:"center",alignItems:"center",width:"650px",border:"1px solid black",borderRadius:"5px",background:"white",padding:"20px"}}>
        <input type="text" placeholder="enter username"style={{padding:"5px",width:"300px",height:"30px"}} value={name} onChange={handlechange}/><br/><br/>
        <br/>
        <select style={{padding:"5px",width:"300px",height:"30px"}} value={role} onChange={handleRoleChange}>
           
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
        </select>
        <br/><br/>
        <button type="submit"style={{padding:"5px",borderRadius:"none",width:"100px",background:"#f5f5f5"}}>Login</button>
    </form>
    </div>
     
    );
}