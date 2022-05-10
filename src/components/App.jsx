import React from "react";
import Header from "./Header";
import Dict from "./dictionary";
import Search from "./search";
import Searchbycat from "./emojibycat";
import SearchbyName from "./emojibyname";
import SearchRandom from "./emojirandom";
function App() {
  return ( <div> <Header/>
  <Search/>
  <Searchbycat/>
  <SearchbyName/>
  <SearchRandom/>
  <Dict/>
  <p>Created By Balkar Singh @2022</p>
  </div> );
}
export default App;
