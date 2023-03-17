import { Navbar, Container } from "react-bootstrap";
import FormApp from "../components/FormApp";

const Contacto = () =>{
    return(
            <Container className="my-5 mx-auto text-center">
                <Container>
                    <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
                    <p> El lugar de los pasteles felices :)</p>
                    <h2>🎂🎂🎂🎂🎂</h2>
                </Container>
                <FormApp/>
            </Container>
        )
    
}

export default Contacto;