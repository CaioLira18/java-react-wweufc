import React, { useState } from 'react'

const AdicionarMateria = () => {

  const [formData, setFormData] = useState({
      title: "",
      description: "",
      backgroundImage: "",
      type: "",
      date: "",
      autor: ""
    });

  const [toasts, setToasts] = useState([]);
  
  const API_URL = "http://localhost:8080/api/materias";

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
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        showToast("Erro ao adicionar Materia.", "error");
        return;
      }

      showToast("Materia adicionado com sucesso!", "success");

      setFormData({
        title: "",
        description: "",
        backgroundImage: "",
        type: "",
        date: "",
        autor: ""
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
        <h1>Adicionar Materia</h1>

        <div>
          {/* Name */}
          <label>Titulo:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
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

          {/* Localização */}
          <label>Background Image:</label>
          <input
            type="text"
            name="backgroundImage"
            value={formData.backgroundImage}
            onChange={handleChange}
            required
          />

          {/* Tipo */}
          <label>Tipo:</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}   
            required
          >
            <option value="">Selecione</option>
            <option value="COVER">Capa</option>
            <option value="NORMAL">Normal</option>
          </select>

          {/* Data */}
          <label>Data da Publicação:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

            {/* Localização */}
          <label>Autor:</label>
          <input
            type="text"
            name="autor"
            value={formData.autor}
            onChange={handleChange}
            required
          />

          <button onClick={handleSubmit}>Salvar</button>
        </div>
      </div>
    </div>
  )
}

export default AdicionarMateria
