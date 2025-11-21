import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const LutadorIndividual = () => {
    const { id } = useParams();
    const [lutador, setLutador] = useState(null);
    const [toasts, setToasts] = useState([]);

    const API_URL = "http://localhost:8080/api";

    const showToast = (message, type = 'success') => {
        const toastId = Date.now();
        const newToast = { id: toastId, message, type };

        setToasts(prev => [...prev, newToast]);

        setTimeout(() => {
            removeToast(toastId);
        }, 5000);
    };

    const removeToast = (id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    const getToastIcon = (type) => {
        if (type === 'success') {
            return (
                <svg className="toast-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            );
        }
        if (type === 'error') {
            return (
                <svg className="toast-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            );
        }
        if (type === 'warning') {
            return (
                <svg className="toast-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            );
        }
        return null;
    };

    useEffect(() => {
        fetch(`${API_URL}/lutadores/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao buscar lutador.");
                }
                return response.json();
            })
            .then((data) => setLutador(data))
            .catch((error) => {
                console.error(error);
                showToast("Erro ao carregar lutador!", "error");
            });
    }, [id]);

    if (!lutador) {
        return (
            <div className="adicionar-container">
                <h1>Carregando Lutador...</h1>
            </div>
        );
    }

    return (
        <>
            {/* Toast Container */}
            <div className="toast-container">
                {toasts.map(toast => (
                    <div key={toast.id} className={`toast toast-${toast.type}`}>
                        {getToastIcon(toast.type)}
                        <p className="toast-message">{toast.message}</p>
                        <button
                            className="toast-close"
                            onClick={() => removeToast(toast.id)}
                            aria-label="Fechar"
                        >
                            <svg className="toast-close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>

            {/* Container com fundo personalizado */}
            <div className="lutador-individual-container" data-lutador={id}
                style={{
                    backgroundImage: `url(${lutador.background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>
                <div className="lutador-card">
                    <div className="lutador-info">

                        <div className="empresaLutador">
                            {lutador.empress === 'WWE' && (
                                <img
                                    src="https://res.cloudinary.com/dthgw4q5d/image/upload/v1763598134/WWE_Logo.svg_b2gftp.png"
                                    alt="WWE Logo"
                                    className="empress-logo"
                                />
                            )}

                            {lutador.empress === 'UFC' && (
                                <img
                                    src="https://res.cloudinary.com/dthgw4q5d/image/upload/v1763735323/drilldown_qddjmf.png"
                                    alt="UFC Logo"
                                    className="empress-logo"
                                />
                            )}
                        <h1>{lutador.name}</h1>
                        </div>

                        <div className="lutador-section">
                            <h3>Idade</h3>
                            <p>{lutador.age} anos</p>
                        </div>

                        <div className="lutador-section">
                            <h3>Conquistas</h3>
                            <p>{lutador.achievement}</p>
                        </div>

                        <div className="lutador-section">
                            <h3>Brand Atual</h3>
                            <p>{lutador.brand}</p>
                        </div>

                        <div className="lutador-section">
                            <h3>Sobre</h3>
                            <p>{lutador.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LutadorIndividual;