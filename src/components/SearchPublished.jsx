import './SearchPublished.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SearchPublished() {
  const [temp, setTemp] = useState(null);
  let {searchVal} = useParams();
  console.log(searchVal);
  
  useEffect(()=>{
          let a = localStorage.getItem("Postes");
          a = JSON.parse(a);
          a = a.filter((v)=>{return v.post.includes(searchVal) || v.details.includes(searchVal)});
          setTemp(a);
  } ,[searchVal] )
  console.log(temp)
  return ( 
      <div className="searched-posts">
         {
        temp &&temp.map(({id,post,details})=>{
            return(
              <div key={id} >
                <h1 style={{color:"#e63946"}}>{post}</h1>
                <p>{details}</p>
              </div>
            )
        })
      }
      </div>

  );

}

export default SearchPublished;
