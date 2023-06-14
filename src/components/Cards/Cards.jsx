import Card from "../Card/Card.jsx"; // Importa el componente Card desde el archivo './Card'
import style from "./Cards.module.css"

export default function Cards(props) {
  // Define una función de componente llamada Cards que recibe props como argumento
  const { characters } = props; // Extrae la propiedad characters de las props recibidas y guárdala en la variable characters

  return (
    <div className={style.cards_container}>
      {characters.map(
        (
          character // Utiliza el método map para iterar sobre el array de characters
        ) => (
          <Card
            key={character.id}
            name={character.name} 
            status={character.status} 
            species={character.species} 
            gender={character.gender} 
            origin={character.origin.name} 
            image={character.image} 
            onClose={() => window.alert("Emulamos que se cierra la card")} 
          />
        )
      )}
    </div>
  );
}
