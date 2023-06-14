import './App.css';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SeachBar/SearchBar.jsx';
import characters from './data.js';
import background from "./components/backgrounds/wp3277694-rick-and-morty-4k-wallpapers.png";
import lup from "../src/components/Icons/lupa.jsx"


function App() {
   return (
      <div className='App'>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} />
         
      </div>
   );
}

export default App;
