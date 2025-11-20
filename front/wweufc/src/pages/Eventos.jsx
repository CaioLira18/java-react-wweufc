import React, { useEffect, useState } from 'react'

const Eventos = () => {
    const [eventos, setEventos] = useState([]);
    const [empresa, setEmpresa] = useState("WWE");

    const API_URL = "http://localhost:8080/api";


    useEffect(() => {
        fetch(`${API_URL}/eventos`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao buscar itens.");
                }
                return response.json();
            })
            .then((data) => setEventos(data))
            .catch((error) => {
                console.error(error);
                toast.error("Erro ao buscar itens.");
            });
    }, []);

    return (
        <div>
            <div className="addFighter">
                <a href="/adicionarEventos"><button>Adicionar Evento</button></a>
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

            <div className="eventosContainer">
                <div className="rowEventos">
                    {eventos
                        .filter(evento => evento.empress === empresa)
                        .map((evento) => (
                            <div className="eventosBox" key={evento.id}>
                                <div className="informarionsBoxEventos">
                                    <div className="logoEventos">
                                        {evento.empress === "WWE" ? (
                                            <img src="https://res.cloudinary.com/dthgw4q5d/image/upload/v1763598134/WWE_Logo.svg_b2gftp.png" alt="WWE Logo" />
                                        ) : (
                                            <img src="https://res.cloudinary.com/dthgw4q5d/image/upload/v1763598163/UFC_logo.svg_t3belb.png" alt="UFC Logo" />
                                        )}
                                        <h2>{evento.name}</h2>
                                    </div>


                                        <div className="headerEvento">
                                            <p>Onde Assistir:</p>
                                            {evento.empress === "WWE" && (
                                                <img src="https://res.cloudinary.com/dthgw4q5d/image/upload/v1763657459/netflix_logo_icon_170919_nb7up1.png" alt="" />
                                            )}
                                            {evento.empress === "UFC" && (
                                                <img src="https://res.cloudinary.com/dthgw4q5d/image/upload/v1763657448/ufc-fight-pass-logo_ssoqci.png" alt="" />
                                            )}
                                        </div>
                                    <div className="informationEventos">
                                        <p>Sobre: <strong>{evento.description}</strong></p>
                                        <p>Local: <strong>{evento.location}</strong></p>
                                        <p>Horario: <strong>{evento.horario}</strong></p>
                                        <div className="notificaçõesButton">
                                            <i className="fa-solid fa-bell"></i>
                                            <button>Ativar Notificações</button>
                                        </div>
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

export default Eventos