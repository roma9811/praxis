import './App.css';
import { HeaderComponent } from './Components/HeaderComponent/Header';
import { MainComponent } from './Components/MainComponent/Main';
import {NavbarComponent } from './Components/NavbarComponent/Navbar';

function App() {
  return (
    <div className="App">
        <NavbarComponent/>
        <HeaderComponent/>
        <MainComponent/>
    </div>
  );
}

export default App;
