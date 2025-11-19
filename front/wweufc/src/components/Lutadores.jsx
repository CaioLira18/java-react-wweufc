import React, { useEffect, useState } from 'react'

const Lutadores = () => {

  const [lutadores, setLutadores] = useState([]);

  const API_URL = "http://localhost:8080/api";

  useEffect(() => {
    fetch(`${API_URL}/lutadores`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar itens.");
        }
        return response.json();
      })
      .then((data) => setLutadores(data))
      .catch((error) => {
        console.error(error);
        alert("Erro ao buscar itens.");
      });
  }, []);

  return (
    <div>
      <div className="lutadoresContainer">
        <h1>Lutadores</h1>
        <div className="rowLutadores">
        <h1>Campeões</h1>
        {lutadores.map((lutador) => (
        lutador.type === '0' && (
        <div className="lutadoresBox">
            <div className="informarionsBox">
                <div className="imageLutador">
                    <img src={lutador.imageRender} alt={`Render do Lutador ${lutador.name}`} />
                </div>
                <div className="informationLutador">
                    <h2>{lutador.name}</h2>
                </div>
            </div>
        </div>
          )
         ))}
      </div>
    </div>
    </div>
  )
}

export default Lutadores
