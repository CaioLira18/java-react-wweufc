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
import com.br.caio.ufcwwe.wweufc.entities.Materia;
import com.br.caio.ufcwwe.wweufc.service.MateriaService;


@RestController
@CrossOrigin(origins = {
    "http://localhost:5173",
})
@RequestMapping("/api/materias")
public class MateriaController {

    @Autowired
    private MateriaService materiaService;

    @GetMapping
    public ResponseEntity<List<Materia>> getAllMaterias() {
        return ResponseEntity.ok(materiaService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Materia> getMateriaById(@PathVariable String id) {
        Optional<Materia> materia = materiaService.findById(id);
        return materia.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Materia> createLutador(@RequestBody Materia materia) {
        return ResponseEntity.ok(materiaService.createMateria(materia));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Materia> updateMateria(@PathVariable String id, @RequestBody Materia materia) {
        Optional<Materia> updatedMateria = materiaService.updateMateria(id, materia);
        return updatedMateria.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable String id) {
        boolean deleted = materiaService.deleteMateria(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}