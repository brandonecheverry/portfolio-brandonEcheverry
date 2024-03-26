import React from "react";
import image from "../../assets/image/screenshot/banner-refacil.png";
import Proyect from "./Proyect";
const URL = "https://www.refacil.co/";
const urlRepo = "https://git-codecommit.us-east-2.amazonaws.com/v1/repos/refacil-backend-v1";

const Proyect09 = () => {
  return (
    <Proyect
      srcImg={image}
      proyectTile="SuperPagos (Refacil)"
      proyectDesc="No poseo proyectos propios pero tengo 3 años de experiencia programando y manejando bases de datos, tambien haciendo uso de AWS"
      tecn="Tecnologías utilizadas: JavaScript, React JS, Node JS, Express, PostgreSQL, Sequelize, Git/Github, AWS"
      urlPage={URL}
      urlRepo={urlRepo}
    />
  );
};

export default Proyect09;
