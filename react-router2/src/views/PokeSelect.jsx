import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PokeSelect() {

    const[id, setId] = useState("")
    const navigate = useNavigate()
    const irAPersonajes = () => {
        navigate(`/pokemon/${id}`)
    }
    return(
        <div className="mt-5 div-select">
            <h1>Selecciona un pokemon</h1>
            <select className="poke-select" value={id} onChange={({target}) => setId(target.value)}>
                <option>Pokemones</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>  
                <option value="10">10</option>
    </select>
            <button className="btn-detalle" onClick={irAPersonajes}>Ver Detalle</button>
        </div>
    )
}