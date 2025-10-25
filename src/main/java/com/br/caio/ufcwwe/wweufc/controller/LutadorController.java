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

import com.br.caio.ufcwwe.wweufc.entities.Lutador;
import com.br.caio.ufcwwe.wweufc.service.LutadorService;


@RestController
@CrossOrigin(origins = {
    "http://localhost:5173",
})
@RequestMapping("/api/lutadores")
public class LutadorController {

    @Autowired
    private LutadorService lutadorService;

    @GetMapping
    public ResponseEntity<List<Lutador>> getAllLutadores() {
        return ResponseEntity.ok(lutadorService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Lutador> getLutadorById(@PathVariable String id) {
        Optional<Lutador> lutador = lutadorService.findById(id);
        return lutador.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Lutador> createLutador(@RequestBody Lutador lutador) {
        return ResponseEntity.ok(lutadorService.createLutador(lutador));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Lutador> updateLutador(@PathVariable String id, @RequestBody Lutador lutador) {
        Optional<Lutador> updatedLutador = lutadorService.updateLutador(id, lutador);
        return updatedLutador.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable String id) {
        boolean deleted = lutadorService.deleteLutador(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}