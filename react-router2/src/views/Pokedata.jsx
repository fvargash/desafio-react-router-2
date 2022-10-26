import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function Pokedata(){
    const [poke, setPoke] = useState({})
    const {id} = useParams()

  useEffect(() => {
    mostrarPokemon();
  })   
  async function mostrarPokemon(){ 
  const endpoint = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(endpoint)
  const data = await response.json()
  setPoke(data)
  console.log(data)
}
  return(<>
    <div className="div-pokedata">
      <Card className="pokedata" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={poke.id && poke.sprites.front_default} />
        <Card.Body>
          <Card.Title>{poke.name}</Card.Title>
          <Card.Text>
            <p>Pokemon-id: {poke.id}</p>
            <p>Base-experience: {poke.base_experience}</p>
            <p>Weigth: {poke.weight}</p>
            <p>Height: {poke.height}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>    
    </>)
}

export default Pokedata;

