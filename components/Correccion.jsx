/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import "/styles/estilos.css";
import "/styles/dropdown.css";
import "/styles/layout.css";
import "./Carta"
import "../styles/bottones.css"
import Carta from "./Carta";


export const Correccion = () => {
  const [opc, setOpc] = useState("es");
  const [loading, setLoading] = useState(false);
  const [correctText, setCorrectText] = useState("");
  const [tips, setTips] = useState([]);
  const [grade, setGrade] = useState("");
  const [text, setText] = useState("");

  const onChange = (e) => {
      setText(e.target.value);
      setTips([])
      setGrade("")
      setLoading(false)
      setCorrectText("")
    };

   const onSubmit = async (e) => {
     setLoading(true);
     e.preventDefault();
     try {
       const response = await axios.post(
         "https://ase2-api.onrender.com/api/v1/",
         {
           "text": text,
           "lan" : opc
          }
          );
      console.log(response)
      setCorrectText(response.data.ct);
      setGrade(response.data.grade);
      setTips(response.data.pointers);
      setLoading(false);

     } catch (error) {
       console.error(error);
     }
   };

  return (
    <div>
      <div>
        <h1>Corrección</h1>
      </div>

      <div className="container-c">
        <div className="dropdown">
          <button className="dropbtn">{opc}</button>
          <div className="dropdown-content">
            <a onClick={() => setOpc("es")}>Español</a>
            <a onClick={() => setOpc("en")}>Ingles </a>
            <a onClick={() => setOpc("fr")}>Frances</a>
            <a onClick={() => setOpc("de")}>Alemán</a>
          </div>
        </div>
        <h3>Ingresa tu texto aquí: </h3>
      </div>
      <div className="container-c">
        <div className="correcciones">
          <form onSubmit={onSubmit}>
            <textarea
              className="form-control "
              id="text-input"
              value={text}
              onChange={onChange}
              rows="6" // El número de filas que se mostrarán, ajusta según tus necesidades
              style={{ resize: "none" }} // Evita que el usuario pueda redimensionar el área de texto
            />
            {text != "" ? (
              <input type="submit" value="Revisar!" className="btn-a"></input>
            ) : (
              <></>
            )}
          </form>
          {!loading ? (
            <>
              {grade === "" ? (
                <></>
              ) : (
                <div className="mt-3">
                  <Carta grade={grade} advices={tips} ct={correctText} />
                </div>
              )}
            </>
          ) : (
            <>
              {/* aqui va la pantalla de carga */}
              <iframe
                src="https://lottie.host/?file=c374647f-b0d7-4f4e-9966-3a193f85da11/7KFo6UBlR8.json"
                className="loading"
              ></iframe>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Correccion;
