import logo from './logo.svg';
import './App.css';
import ButtonComponent from './Components/ButtonComponent';
import ImageComponent from './Components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ImageComponent src="https://cdn-img-t.facciabuco.com/52/3nhetc6si1-meloni-re-giorgio-cosi-ha-deciso-vaccata_b.jpg" alt="Meme sulla Meloni" />
        
        <ButtonComponent nome="Clickami!"/>
      </header>
    </div>
  );
}

export default App;
