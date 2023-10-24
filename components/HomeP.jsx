/* eslint-disable no-unused-vars */
import React from "react";
// import './estilos.css'
import "bootstrap/dist/css/bootstrap.css";
import Correccion from "./Correccion";
import { Link } from "react-router-dom";
export function HomeP() {
  return (
    <div>
      <div>
        <h1 className="title">ESCRIBIA</h1>
      </div>
      <div className="container text-center mt-3">
        <div className="row">
          <div className="col text-left">
            <div className="slogan">
              No dejes que tu escritura te detenga. Deja que EscribIA te ayude a
              redactar mejor
            </div>
            <div className="row">
              <div className="button">
                <Link to="/Correccion">
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="button-slogan"
                  >
                    ¡Pruébalo!
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col ">
            <iframe
              src="https://lottie.host/?file=078b12d4-51b4-4ab1-931d-fc824c00a617/ekKlUrTnDi.json"
              className="animation-1"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card-h">
              <p className="txt-home">
                EscribIA utiliza inteligencia artificial para mejorar la calidad
                de los textos y las habilidades de redacción de los usuarios.
              </p>
            </div>
            <div className="card-h">
              <p className="txt-home">
                Dirigido a estudiantes universitarios, EscribIA proporciona
                corrección gramatical y consejos útiles para mejorar el texto
                ingresado.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card-h">
              <p className="txt-home">
                Pruébalo en sus tres idiomas disponibles: Inglés, Español y
                Alemán.
              </p>
            </div>
            <div className="card-h">
              <p className="txt-home">
                Fácil de utilizar por cualquier usuario, EscribIA utiliza la
                tecnología de React, Flask y OpenAI para brindar resultados
                precisos y rápidos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeP;
