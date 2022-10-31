import './App.css';
import ItemListContainer from './components/Main/ItemListContainer';
import NavBar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import ReactAudioPlayer from 'react-audio-player';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="hola soy el ItemListContainer"/>}/>
        <Route path="/category/:category" element={<ItemListContainer greeting="hola soy el ItemListContainer"/>}/>
        <Route path="/detail/:detail" element={<ItemDetailContainer/>}/>
         <Route path="/cart" element={<Cart/>}/> 
      </Routes>
      <div className='divReproductor'>
        <ReactAudioPlayer src="https://www.bensound.com/bensound-music/bensound-unstoppable.mp3" autoPlay={true} controls/>
      </div>
     
      <Footer/>
  </BrowserRouter>
  );
}

export default App;
