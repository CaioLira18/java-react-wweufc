package com.br.caio.ufcwwe.wweufc.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.br.caio.ufcwwe.wweufc.entities.Evento;
import com.br.caio.ufcwwe.wweufc.service.EventoService;


@RestController
@CrossOrigin(origins = {
    "http://localhost:5173",
})
@RequestMapping("/api/eventos")
public class EventoController {

    @Autowired
    private EventoService eventoService;

    @GetMapping
    public ResponseEntity<List<Evento>> getAllEventos() {
        return ResponseEntity.ok(eventoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Evento> getEventotById(@PathVariable String id) {
        Optional<Evento> evento = eventoService.findById(id);
        return evento.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Evento> createEvento(@RequestBody Evento evento) {
        return ResponseEntity.ok(eventoService.createEvento(evento));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Evento> updateEvento(@PathVariable String id, @RequestBody Evento evento) {
        Optional<Evento> updatedEvento = eventoService.updateEvento(id, evento);
        return updatedEvento.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable String id) {
        boolean deleted = eventoService.deleteEvento(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}