import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import NewPost from "./components/NewPost";
import Published from "./components/Published";
import SearchPublished from "./components/SearchPublished";

function App() {

  let getSearchData=(data)=>{
      console.log(`child to data ${data}`);
      console.log(data)
  }
  return (
    <div className="App">
      <Router>
      <SearchPublished onSubmit={getSearchData}/>
      <Navbar />
      <Routes>
        <Route index path="newpost" element={<NewPost />} />
        <Route path="published" element={<Published />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
