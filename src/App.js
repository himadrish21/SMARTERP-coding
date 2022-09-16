import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import NewPost from "./components/NewPost";
import Published from "./components/Published";
import SearchPublished from "./components/SearchPublished";

function App() {


  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route index path="newpost" element={<NewPost />} />
        <Route path="published" element={<Published />} />
        <Route path="search:searchVal" element={<SearchPublished/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
