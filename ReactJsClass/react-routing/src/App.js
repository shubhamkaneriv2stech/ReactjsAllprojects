import logo from './logo.svg';
import './App.css';
import Game from './components/Game';

import {BrowserRouter,
Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';

import About from "./components/About"

import Home from "./components/Home"

import Blog from "./components/Blog"

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
      <Route>

      </Route>

      <Route path="/" exact component={Home}/>
      
      </BrowserRouter>


    </div>
  );
}

export default App;
