import React from "react";
import { useState , useEffect} from "react";
// import { useReducer } from "react";
// import { useNavigate } from "react-router-dom";
import './NewPost.css'
function NewPost() {
 
  let [post,setPost]=useState("")
  let [details,setDetails]=useState("")
  let [local,setLocal]=useState(null)

  useEffect(()=>{
    if(localStorage.getItem("Postes") == null)
    {
        localStorage.setItem("Postes" , "[]" );
        console.log("creayted");
    }
    else
    {
        let a = localStorage.getItem("Postes");
        a = JSON.parse(a);
        setLocal(a);
    }
} , [] )

let updatePost=(e)=>{
  setPost(e.target.value)
  console.log(post);
}
let updateDeails=(e)=>{
  setDetails(e.target.value)
  console.log(details);
}
let handelSubmit=(e)=>{
  e.preventDefault()
  setLocal([{id:`${Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)}`,post:post.toLowerCase(),details:details.toLowerCase()},...local])
  localStorage.setItem('Postes',JSON.stringify(local));
}
console.log(local)

  return (
    <>
    <h1 style={{marginTop:"40px"}}>Enter New Post</h1>
      <form className="New-post-container">
        <label htmlFor="">Title:-</label>
        <input type="text" name="post" onChange={updatePost} />
       <label htmlFor="">Article:-</label>
        <textarea onChange={updateDeails} name="details" cols="30" rows="10"></textarea>
       <button onClick={handelSubmit}>Publish</button>
      </form>
    </>
  );
}

export default NewPost;
