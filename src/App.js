import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Collection from './components/Collection';

function App() {
  return (
    <div className="App flex items-center  justify-around font-sans  flex-col ">
      <Navbar />
    <Collection />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
