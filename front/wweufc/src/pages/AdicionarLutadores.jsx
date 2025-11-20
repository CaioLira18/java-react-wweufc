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

  const [mensagem, setMensagem] = useState("");
  const API_URL = "http://localhost:8080/api/lutadores";

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
        setMensagem("Erro ao adicionar lutador.");
        return;
      }

      setMensagem("Lutador adicionado com sucesso!");

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
      setMensagem("Erro ao conectar com a API.");
    }
  };

  return (
    <div className="adicionar-container">
      <h1>Adicionar Lutador</h1>

      <form onSubmit={handleSubmit}>

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

        <button type="submit">Salvar</button>
      </form>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default AdicionarLutadores;
