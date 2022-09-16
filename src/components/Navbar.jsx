import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
  return (
    <nav className='nav-post'>
        <Link to='newpost'>NewPost</Link>
        <Link to='published'>Published</Link>
    </nav>
  )
}

export default Navbar