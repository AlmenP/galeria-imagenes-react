import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {

    return (<h1 className="tituloheader">{ props.title }</h1>);
};

export default Header;