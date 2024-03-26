import React from "react";
import Skill from "./Skill";
import htmlStiker from "../assets/image/html.png";
import cssStiker from "../assets/image/css-logo.png";
import javascriptStiker from "../assets/image/javascript-logo-svg-vector.svg";
import reactStiker from "../assets/image/react-logo22.png";
import gitStiker from "../assets/image/git-logo2.png";
import nodeStiker from "../assets/image/nodejs-icon-logo-svg-vector.svg";
import typescriptStiker from "../assets/image/typescript-programming-language.svg";
import psqlStiker from "../assets/image/postgresql-icon.svg";
import sequelizeStiker from "../assets/image/sequelizejs-icon.svg";
import nextStiker from "../assets/image/next-js.svg";
import vueStiker from "../assets/image/vue-js-1.svg";
import nestStiker from '../assets/image/nestjs.svg'

const Skills = () => {
  return (
    <section className="s-resume target-section">
      <div className="row s-resume__section ">
        <div className="column  tab-12">
          <h3 id="skills" className="section-header-allcaps">
            Skills
          </h3>
        </div>
        <div className="column large-10 tab-12">
          <div className="resume-block">
            <ul className="skill-bars-fat skill-grid">
              <Skill
                skill="HTML"
                src={htmlStiker}
                title="HTML"
                alt="html-logo"
              />
              <Skill skill="CSS" src={cssStiker} title="CSS" alt="css-logo" />
              <Skill
                skill="JavaScript"
                src={javascriptStiker}
                title="JavaScript"
                alt="javascript-logo"
              />
              <Skill
                skill="TypeScript"
                src={typescriptStiker}
                title="TypeScript"
                alt="typescript-logo"
              />
              <Skill
                skill="React"
                src={reactStiker}
                title="React Js - React Native"
                alt="react-logo"
              />
              <Skill
                skill="Next"
                src={nextStiker}
                title="Next Js"
                alt="next-logo"
              />
              <Skill
                skill="Vue"
                src={vueStiker}
                title="Vue Js"
                alt="vue-logo"
              />
              <Skill
                skill="Node"
                src={nodeStiker}
                title="Node Js"
                alt="node-logo"
              />
              <Skill
                skill="Nest"
                src={nestStiker}
                title="Nest Js"
                alt="nest-logo"
              />
              <Skill
                skill="Postgresql"
                src={psqlStiker}
                title="PostgreSQL"
                alt="psql-logo"
              />
              <Skill
                skill="Sequelize"
                src={sequelizeStiker}
                title="Sequelize"
                alt="sequelize-logo"
              />
              <Skill skill="Git" src={gitStiker} title="Git" alt="git-logo" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
