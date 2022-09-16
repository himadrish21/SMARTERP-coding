import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useState } from 'react';

function Navbar() {
  const [searchVal, setsearchVal] = useState("");
  return (
    <nav className='nav-post'>
      <div>
                <Link to={`search${searchVal}`}>
                <button> &#128269; </button>
                </Link>

                <input type="search" value={searchVal}
                onChange={(e)=>{setsearchVal(e.target.value)}}/>
                
                
                <button onClick={()=>{setsearchVal("")}}> clear </button>
            </div>
        <Link to='newpost'>NewPost</Link>
        <Link to='published'>Published</Link>
    </nav>
  )
}

export default Navbar