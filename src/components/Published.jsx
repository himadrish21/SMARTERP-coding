import React from 'react'
import './Published.css'
function Published() {
  // let {post,details}=JSON.parse(localStorage.getItem("Postes"))
  let temp = JSON.parse(localStorage.getItem("Postes"))
  console.log(temp);
  
  return (
    <div className="Published-post">
      {
        temp &&temp.map(({id,post,details})=>{
            return(
              <div key={id} >
                <h1>{post}</h1>
                <p>{details}</p>
              </div>
            )
        })
      }
    </div>
  )
}

export default Published