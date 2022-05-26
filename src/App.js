import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {WebcamCapture} from "./components/Webcam/Webcam";
import MusicPlayer from "./components/Music-Player/MusicPlayer";

function App() {
  return (
      <>
    <Navbar/>
    <WebcamCapture/>
        <MusicPlayer/>
      </>
  );
}

export default App;
