import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx'
import React, { useState } from 'react';
import axios from 'axios'
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail';
import { useLocation } from 'react-router-dom';
import Form from './components/Form/Forms.jsx';
import video from './components/img_vid/rym.mp4'
// import { VideoBackground, Video } from './styled.components';





function App() {

   const locate = useLocation()

   const [characters, setCharacters] = useState([])
   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFiltered)
   }

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });

   }
   return (
      <div className='App'>

         {/* <VideoBackground>
            <Video autoPlay muted loop className="videorym">
               <source src={video} type='video/mp4' >
                  
               </source>
            </Video>

         </VideoBackground> */}



         {locate.pathname !== "/" && <Nav onSearch={onSearch} />}
         {/* {locate.pathname  !== "/" ?  <Nav onSearch={onSearch} /> : null} */}

         <Routes>
            <Route path='/' element={<Form />} />

            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />


            <Route path='/about' element={<About />} />


            <Route path='/detail/:id' element={<Detail />} />

         </Routes>




      </div >
   );
}

export default App;