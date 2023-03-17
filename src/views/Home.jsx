import React from "react";
import {Container } from "react-bootstrap";
import CakeCards from "../components/CakeCards";

const Home = () =>{
    return(
        <>
        <Container className="mx-auto">
            <Container className="my-5 text-center">
                <h1>Bienvenido a Happy Cake :)</h1>
                <p> El lugar de los pasteles felices</p>
                <hr/>
            </Container>
            <CakeCards/>
        </Container>
        </>
    )
}

export default Home;