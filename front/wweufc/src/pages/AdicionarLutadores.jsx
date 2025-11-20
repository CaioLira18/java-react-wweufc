import React, { useState } from "react";

const AdicionarLutadores = () => {
  const [formData, setFormData] = useState({
    name: "",
    empress: "",
    age: "",
    description: "",
    achievement: "",
    background: "",
    imageRender: "",
    type: ""
  });

  const [toasts, setToasts] = useState([]);

  const API_URL = "http://localhost:8080/api/lutadores";

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
        showToast("Erro ao adicionar lutador.", "error");
        return;
      }

      showToast("Lutador adicionado com sucesso!", "success");

      // Reset
      setFormData({
        name: "",
        empress: "",
        age: "",
        description: "",
        achievement: "",
        background: "",
        imageRender: "",
        type: ""
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

      <div className="adicionar-container">
        <div className="logosAdicionar">
            <img src="https://res.cloudinary.com/dthgw4q5d/image/upload/v1763598134/WWE_Logo.svg_b2gftp.png" alt="" />
            <img src="https://res.cloudinary.com/dthgw4q5d/image/upload/v1763598163/UFC_logo.svg_t3belb.png" alt="" />
        </div>
        <h1>Adicionar Lutador</h1>

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

          {/* Idade */}
          <label>Idade:</label>
          <input
            type="text"
            name="age"
            value={formData.age}
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

          {/* Achievement */}
          <label>Conquistas:</label>
          <input
            type="text"
            name="achievement"
            value={formData.achievement}
            onChange={handleChange}
          />

          {/* Background */}
          <label>História / Background:</label>
          <textarea
            name="background"
            value={formData.background}
            onChange={handleChange}
            rows="3"
          ></textarea>

          {/* Image Render */}
          <label>URL da Imagem:</label>
          <input
            type="text"
            name="imageRender"
            value={formData.imageRender}
            onChange={handleChange}
          />

          {/* ChampionEnum */}
          <label>Tipo (ChampionEnum):</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="CHAMPION">CHAMPION</option>
            <option value="NONE">NONE</option>
          </select>

          <button onClick={handleSubmit}>Salvar</button>
        </div>
      </div>
    </>
  );
};

export default AdicionarLutadores;