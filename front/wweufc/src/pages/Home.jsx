import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";

const Home = () => {
  const [materias, setMaterias] = useState([]);
  const API_URL = "http://localhost:8080/api";

  useEffect(() => {
    fetch(`${API_URL}/materias`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar itens.");
        }
        return response.json();
      })
      .then((data) => setMaterias(data))
      .catch((error) => {
        console.error(error);
        toast.error("Erro ao buscar itens.");
      });
  }, []);

  return (
    <div>
      {materias
        .filter(materia => materia.type === "COVER")
        .map((materia) => (
          <div className="slideContainer" key={materia.id}>
            <div className="backgroundSlide">
              <img src={materia.backgroundImage} alt={materia.title} />
            </div>

            <div className="slideBox">
              <h1>{materia.title}</h1>

              <div className="buttonSlide">
                <a href={`/materia/${materia.id}`}>
                  <button>Ver Matéria</button>
                </a>

                <a href="/adicionarMaterias">
                  <button>Adicionar Matéria</button>
                </a>
              </div>
            </div>
          </div>
        ))
      }

      <div className="otherMaterias">
        <div className="headerMateria">
          <h1>Principais Noticias</h1>
        </div>
        {materias.filter(materia => materia.type === "NORMAL").map((materia) => (
          <div className="otherMateriaBox" key={materia.id}>
            <img src={materia.backgroundImage} alt={materia.title} />

            <div className="informationMateria">
              <h2>{materia.title}</h2>
              <a href={`/materia/${materia.id}`}>
                <button>Ver Matéria</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
