import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="main">
            <h1>Bienvenido maestro pokemón</h1>
            <div>
                <Link to="/">
                    <img src="./img/pikachu.png" alt="#" width="400px" height="400px"/>
                </Link>
            </div>
            
        </div>
    )
}

export default Home;