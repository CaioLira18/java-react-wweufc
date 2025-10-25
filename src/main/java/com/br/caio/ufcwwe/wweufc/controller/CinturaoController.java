package com.br.caio.ufcwwe.wweufc.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.br.caio.ufcwwe.wweufc.entities.Cinturao;
import com.br.caio.ufcwwe.wweufc.service.CinturaoService;

public class CinturaoController {
    @Autowired
    private CinturaoService cinturaoService;

    @GetMapping
    public ResponseEntity<List<Cinturao>> getAllCinturoes() {
        return ResponseEntity.ok(cinturaoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cinturao> getCinturaoById(@PathVariable String id) {
        Optional<Cinturao> cinturao = cinturaoService.findById(id);
        return cinturao.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Cinturao> createCinturao(@RequestBody Cinturao cinturao) {
        return ResponseEntity.ok(cinturaoService.createLutador(cinturao));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cinturao> updateCinturao(@PathVariable String id, @RequestBody Cinturao cinturao) {
        Optional<Cinturao> updatedCinturao = cinturaoService.updateCinturao(id, cinturao);
        return updatedCinturao.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCinturao(@PathVariable String id) {
        boolean deleted = cinturaoService.deleteCinturao(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
