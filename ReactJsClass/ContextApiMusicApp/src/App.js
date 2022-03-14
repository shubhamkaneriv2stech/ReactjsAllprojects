import React from "react";
import "./App.css";
import { MusicPlayerProvider } from "./components/MusicPlayerContext";
import TrackList from "./components/TrackList";
import PlayerControls from "./components/PlayerControl";
//1. create a context with the help of createContext hook
//2. create a provider and consumer component
const App = () => {
  return (
    <div className="App">
      <MusicPlayerProvider>
        <div className="container">
          <TrackList />
          <PlayerControls />
        </div>
      </MusicPlayerProvider>
    </div>
  );
};

export default App;
