import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Footer = () => {
    return (
        <div className="bg-light text-dark text-center pb-2">
            <div className="tituloheader">
                <h2>The boy who lived</h2>
                <span>
                    Galería con los personajes principales de la mágica saga que marcó generaciones.
                </span>
                <div><Button className="m-3"variant="warning">Aquí</Button></div>
            </div>
        </div>
    );
}

export default Footer;