import React, { useEffect, useState } from 'react'

const WWEpage = () => {

    const [materias, setMaterias] = useState([]);
    const [cinturoes, setCinturoes] = useState([]);

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

    useEffect(() => {
        fetch(`${API_URL}/cinturoes`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao buscar itens.");
                }
                return response.json();
            })
            .then((data) => setCinturoes(data))
            .catch((error) => {
                console.error(error);
                toast.error("Erro ao buscar itens.");
            });
    }, []);

    return (
        <div>
            <div className="imageHome">
                <img src="https://res.cloudinary.com/dthgw4q5d/image/upload/v1763736641/20250611_Superstars_Header_sf3zce.jpg" alt="" />
            </div>

            <div className="addFighter">
                <a href="/adicionarcinturao"><button>Adicionar Cinturao</button></a>
            </div>


            <div className="showNews">
                <div className="otherMaterias">
                    <h1 className='cinturoesTitle'>Ultimas Noticias</h1>
                    {materias.filter(materia => materia.type === "NORMAL").map((materia) => (
                        <div className="otherMateriaBox" key={materia.id}>
                            <a href={`/materia/${materia.id}`}><img src={materia.backgroundImage} alt={materia.title} /></a>

                            <div className="informationMateria">
                                <h2>{materia.title}</h2>
                                <a href={`/materia/${materia.id}`}>
                                    <button>Ver Matéria</button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <h1 className='cinturoesTitle'>Cinturões</h1>
                <div className="rowCinturao">
                    {cinturoes.map((cinturao) => (
                        <div className="cinturaoShowContainer">
                            <div className="cinturaoShowBox">
                                <img src={cinturao.image} alt="" />
                                <div className="informationCinturao">
                                    <h2>{cinturao.name}</h2>
                                    <p>Atual Campeão: <strong>{cinturao.currentChamp}</strong></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WWEpage
