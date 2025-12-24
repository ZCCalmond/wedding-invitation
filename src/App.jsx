import Cover from './components/Cover';
import PhotoGallery from './components/PhotoGallery';
import VideoPlayer from './components/VideoPlayer';
import WeddingInfo from './components/WeddingInfo';
import MapNavigation from './components/MapNavigation';
import MusicPlayer from './components/MusicPlayer';
import Ending from './components/Ending';
import './App.css';

function App() {
  return (
    <div className="app">
      <MusicPlayer />
      <Cover />
      <PhotoGallery />
      <VideoPlayer />
      <WeddingInfo />
      <MapNavigation />
      <Ending />
    </div>
  );
}

export default App;
