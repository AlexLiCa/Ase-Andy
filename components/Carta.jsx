import "../styles/carta.css";

export default function Carta({grade, advices, ct}) {

  return (
    <div>
      <div className="results-summary-container">
        <div className="results-summary-container__result">
          <div className="heading-tertiary"></div>
          <div className="result-box">
            <div className="heading-primary">{grade}</div>
            <p className="result">of 10</p>
          </div>
          <div className="result-text-box">
            <div className="heading-secondary">{ct}</div>
          </div>
        </div>
        <div className="results-summary-container__options">
          <div className="heading-secondary heading-secondary--green">Consejos</div>
          <div className="summary-result-options">
            {advices.map((advice, index) => (
              <div className="result-option result-option-green">
                <div className="icon-box">
                  <span className="green-icon-text" key={index}>{advice}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Carta.defaultProps = {
   advices : ["Ejemplo A", "Ejemplo B", "Ejemplo C"],
   grade : 10,
   ct: "Texto corregido"
};