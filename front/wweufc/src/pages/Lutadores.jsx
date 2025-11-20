import React, { useEffect, useState } from 'react'

const Lutadores = () => {

  const [lutadores, setLutadores] = useState([]);
  const [empresa, setEmpresa] = useState("WWE");
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

      <div className="addFighter">
        <a href="/adicionarlutador"><button>Adicionar Lutador</button></a>
      </div>
      <div className="empressSelect">
        <img 
          src="https://res.cloudinary.com/dthgw4q5d/image/upload/v1763598134/WWE_Logo.svg_b2gftp.png" 
          alt="WWE" 
          onClick={() => setEmpresa("WWE")}
          style={{ cursor: 'pointer', opacity: empresa === "WWE" ? 1 : 0.5 }}
        />
        <img 
          src="https://res.cloudinary.com/dthgw4q5d/image/upload/v1763598163/UFC_logo.svg_t3belb.png" 
          alt="UFC" 
          onClick={() => setEmpresa("UFC")}
          style={{ cursor: 'pointer', opacity: empresa === "UFC" ? 1 : 0.5 }}
        />
      </div>
      <div className="lutadoresContainer">
         <div className="rowLutadores">
          <div className="informationFighters">
            <h1>Campeões</h1>
            <p>Mostrar Tudo</p>
          </div>
          {lutadores
            .filter(lutador => lutador.type === 'CHAMPION' && lutador.empress === empresa)
            .map((lutador) => (
              <div className="lutadoresBox" key={lutador.id}>
                <div className="informarionsBox">
                  <div className="imageLutador">
                    <img 
                      src={lutador.imageRender} 
                      alt={`Render do Lutador ${lutador.name}`} 
                    />
                  </div>

                  <div className="informationLutador">
                    <h2>{lutador.name}</h2>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        <div className="rowLutadores">
          <div className="informationFighters">
            <h1>Lutadores</h1>
            <p>Mostrar Tudo</p>
          </div>
          {lutadores
            .filter(lutador => lutador.type === 'NONE' && lutador.empress === empresa)
            .map((lutador) => (
              <div className="lutadoresBox" key={lutador.id}>
                <div className="informarionsBox">
                  <div className="imageLutador">
                    <img 
                      src={lutador.imageRender} 
                      alt={`Render do Lutador ${lutador.name}`} 
                    />
                  </div>

                  <div className="informationLutador">
                    <h2>{lutador.name}</h2>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Lutadores
