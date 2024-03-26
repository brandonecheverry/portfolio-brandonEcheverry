import React, { useEffect } from "react";
import Skills from "./Skills";
import userPhoto from "../assets/image/fondo-blanco.png";
import "./styles/About.css";
import CV from "../assets/cv/1711050199611.pdf";

const About = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleScrollToTop();
  }, []);

  return (
    <React.Fragment>
      <section id="about" className="s-about target-section">
        <div className="row">
          <div className="column large-3 tab-12">
            <img className="s-about__pic" src={userPhoto} alt="user avatar" />
          </div>
          <div className="column large-9 tab-12 s-about__content">
            <h1 className="about-me">
              <span className="about-description font-500">Sobre Mí</span>
            </h1>
            <div>
              <p className="about-description">
                Hola, mi nombre es Brandon Echeverry, BackEnd Developer.
              </p>

              <p className="about-description">
                Soy estudiante de Tecnologia en desarrollo de software de la Universidad 
                Tecnologica de Pereira 
                con 3 años de experiencia en manejo de base de datos, JavaScript 
                y areas de soporte, actualmente me encuentro cursando quinto semestre de 
                mi carrera.
              </p>

              <p className="about-description">
                Actualmente me encuentro trabajando para una empresa llamada SuperPagos 
                en la cual tengo el Rol de desarrollador Backend en lenguajes como
                JavaScript y TypeScript, tambien tengo gran conocimiento en las bases 
                de datos, en lenguajes como PostgreSQL y MySQL.
              </p>

              <p className="about-description">
                Técnologías: JavaScript, React JS/React Native, Next
                JS, TypeScript, Node JS, Nest JS,
                SQL, PostgreSQL, Sequelize, Git.
              </p>
            </div>
            <h1 className="about-me">
              <span className="about-description font-500">Educación</span>
            </h1>
            <p className="about-description">
               -Estudiante de Tecnologia en Desarrollo De Software.(UTP)
               <br />
               -Tecnico en operaciones contables y financieras.(SENA)
            </p>
            <hr size="8px" color="white" />
            <h2 className="about-me">
              <span className="about-description font-500">
                ¿Qué puedo hacer?
              </span>
            </h2>
            <br />
            <h3 className="about-me center font-500">Front-End</h3>
            <p className="about-description">
               No tengo mucho conocimiento a nivel de FrontEnd, me encuentro 
               aprendiendo un poco de FrontEnd para que de esta manera pueda 
               llegar a ser desarrollador FullStack
            </p>
            <br />
            <h3 className="about-me center font-500">Back-End</h3>
            <p className="about-description">
              Utilizando Express y Node, puedo crear rutas para APIs REST,
              protegerlas e implementar bases de datos SQL y NoSQL como
              PostgreSQL y MongoDB. De igual manera he trabajado con
              arquitecturas de software escalables y mantenibles, implementando
              módulos manteniendo separadas las distintas capas de un proyecto.
            </p>

            <hr />
            <div className="row s-about__content-bottom">
              <div className="column w-1000-stack cv">
                <a
                  id="btn-donwload-cv"
                  className="btn btn--download btn-donwload"
                  href={CV}
                  download="1711050199611"
                >
                  Descargar CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Skills />
    </React.Fragment>
  );
};

export default About;
