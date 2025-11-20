package com.br.caio.ufcwwe.wweufc.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.caio.ufcwwe.wweufc.entities.Evento;
import com.br.caio.ufcwwe.wweufc.entities.Lutador;
import com.br.caio.ufcwwe.wweufc.repository.EventoRepository;



@Service
public class EventoService {

    @Autowired
    private EventoRepository eventoRepository;

    public List<Evento> findAll() {
        return eventoRepository.findAll();
    }

    public Optional<Evento> findById(String id) {
        return eventoRepository.findById(id);
    }

    public Evento createEvento(Evento evento) {
        return eventoRepository.save(evento);
    }

    public Optional<Evento> updateEvento(String id, Evento updatedEvento) {
        return eventoRepository.findById(id).map(evento -> {
            evento.setName(updatedEvento.getName());
            evento.setDescription(updatedEvento.getDescription());
            evento.setLocation(updatedEvento.getLocation());
            evento.setHorario(updatedEvento.getHorario());
            evento.setEmpress(updatedEvento.getEmpress());
            evento.setDate(updatedEvento.getDate());
            evento.setStreamingLogo(updatedEvento.getStreamingLogo());
            return eventoRepository.save(evento);
        });
    }

    public boolean deleteEvento(String id) {
        return eventoRepository.findById(id).map(evento -> {
            eventoRepository.delete(evento);
            return true;
        }).orElse(false);
    }
}