import React, { useEffect, useState } from 'react'

const AdicionarCinturao = () => {

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
          toast.error("Erro ao buscar itens.");
        });
    }, []);

  const [formData, setFormData] = useState({
      name: "",
      image: "",
      description: "",
      empress: "",
      dateCreation: "",
      currentChamp: ""
    });

  const [toasts, setToasts] = useState([]);
  
  const showToast = (message, type = 'success') => {
    const id = Date.now();
    const newToast = { id, message, type };
    
    setToasts(prev => [...prev, newToast]);
    
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  };

   const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/cinturoes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        showToast("Erro ao adicionar Evento.", "error");
        return;
      }

      showToast("Evento adicionado com sucesso!", "success");

      setFormData({
        name: "",
        image: "",
        description: "",
        empress: "",
        dateCreation: "",
        currentChamp: ""
      });

    } catch (error) {
      showToast("Erro ao conectar com a API.", "error");
    }
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
    return null;
  };
  

  return (

    
    <div>
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

        <div className="adicionar-container">
        <div className="logosAdicionar">
            <img src="https://res.cloudinary.com/dthgw4q5d/image/upload/v1763598134/WWE_Logo.svg_b2gftp.png" alt="" />
            <img src="https://res.cloudinary.com/dthgw4q5d/image/upload/v1763735323/drilldown_qddjmf.png" alt="" />
        </div>
        <h1>Adicionar Cinturao</h1>

        <div>
          {/* Name */}
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Descrição */}
          <label>Descrição:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>

          {/* Image */}
          <label>Imagem:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />

          {/* Empresa */}
          <label>Empresa:</label>
          <select
            name="empress"
            value={formData.empress}
            onChange={handleChange}   
            required
          >
            <option value="">Selecione</option>
            <option value="WWE">WWE</option>
            <option value="UFC">UFC</option>
          </select>

          {/* Data */}
          <label>Data de Criação:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          {/* Campeão Atual */}
           <select
            name="currentChamp"
            value={formData.currentChamp}
            onChange={handleChange}   
            required
          >
            <option value="">Selecione</option>
            {lutadores.map((lutador) => (
              lutador.empress === "WWE" &&
              <option key={lutador.id} value={lutador.name}>
                {lutador.name} - {lutador.empress}
              </option>
            ))} 
          </select>

          <button onClick={handleSubmit}>Salvar</button>
        </div>
      </div>
    </div>
  )
}

export default AdicionarCinturao
