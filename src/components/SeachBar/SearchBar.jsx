import style from '../SeachBar/SearchBar.module.css'


export default function SearchBar(props) {
   const onSearch = () => {
     
   };
 
   return (
     <div className={style.bar_style}>
       <input type = 'search'/>
       <button onClick={onSearch}>Buscar</button> 
     </div>
   );
 }