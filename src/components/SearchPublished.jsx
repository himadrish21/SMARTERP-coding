import React from "react";
import { useState } from "react";

function SearchPublished(props) {
  let [search, setSearch] = useState('');
  console.log(search);


  let handleChange=(e)=>{
    setSearch(e.target.value);
}

  let handleSearch = (event) => {
    event.preventDefault();    
    props.onSubmit(search);   
    console.log(search);
  };



  return (
    <form action="" onSubmit={handleSearch}>
      <input
        type="text" onChange={handleChange}
        value={search}
      />
      <button
        onClick={() => {
          setSearch("");
        }}
      >clear</button>
    </form>
  );
}

export default SearchPublished;
