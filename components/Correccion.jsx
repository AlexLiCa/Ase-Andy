/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "/styles/estilos.css";
import '/styles/dropdown.css'
export const Correccion = () => {
    const [opc, setOpc] = useState("Español");

    return (
      <div className="container">
        <div>
          <h1>Corrección</h1>
        </div>

        <div className="dropdown">
          <button className="dropbtn">{opc}</button>
          <div className="dropdown-content">
            <a onClick={() => setOpc("Español")}>Español</a>
            <a onClick={() => setOpc("Ingles")}>Ingles </a>
            <a onClick={() => setOpc("Frances")}>Frances</a>
            <a onClick={() => setOpc("Aleman")}>Alemán</a>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Ingresa tu texto aquí: </h3>
              <textarea
                className="form-control form-control-lg"
                id="text-input"
                rows="6" // El número de filas que se mostrarán, ajusta según tus necesidades
                style={{ resize: "none" }} // Evita que el usuario pueda redimensionar el área de texto
              />
            </div>
            <div className="col">
              <div className="corrected-text"></div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Correccion;