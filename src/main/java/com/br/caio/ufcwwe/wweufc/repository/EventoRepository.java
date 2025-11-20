package com.br.caio.ufcwwe.wweufc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br.caio.ufcwwe.wweufc.entities.Evento;

public interface EventoRepository extends JpaRepository<Evento, String> {
    
}
