import './App.css';
import 'fs';
import { search,update } from './search';
import fs from 'fs';

function App() {
  let state = {
    name:'',
  }

  return (
    <div className="main_cont">
    <h1 className="head_text">Movie browser</h1>
    <div className="search_container">
      <div className="search_img"></div>

      <input onChange={update} type="text" name="" id="" />
      <button className="search" onClick={search(state.name)}>Search</button>
    </div>

      <main className="movie_container">
      
     
      </main>
    </div>
  );
}



export default App;
