import { useState,useEffect } from "react";
import * as React from 'react';
export default function Staes () {
    const[count,setCount]=useState(0);
    const name="sumaja";
    const names =["su","Sd","dd"];
useEffect(()=>{
    console.log("useEffect called");
    fetch("https://jsonplaceholder.typicode.com/users")
   .then(res => res.json())
   .then(data => setUsers(data));

},[count])

 const square = useMemo(() => {

  console.log("Calculating...");

  return count * count;

 }, [count]);
 const handleClick =useCallback(()=>{
    console.log("Button Clicked");
 },[]);
    return(
<>
<h1>state:{count}</h1>
<h1>{square}</h1>
<Student name={name}/>
<button onClick={handleClick}>click</button>
<button onClick={()=>setCount(count+1)}>Increment1</button>
<button onClick={()=>setCount(count+1)}>Increment</button>
{names.map(nam=>
<li key={nam}>{nam}</li>
)}
</>
    )
}
