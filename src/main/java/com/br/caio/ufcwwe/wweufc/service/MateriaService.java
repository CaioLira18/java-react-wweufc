package com.br.caio.ufcwwe.wweufc.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.br.caio.ufcwwe.wweufc.entities.Materia;
import com.br.caio.ufcwwe.wweufc.repository.MateriaRepository;

@Service
public class MateriaService {

    @Autowired
    private MateriaRepository materiaRepository;

    public List<Materia> findAll() {
        return materiaRepository.findAll();
    }

    public Optional<Materia> findById(String id) {
        return materiaRepository.findById(id);
    }

    public Materia createMateria(Materia materia) {
        return materiaRepository.save(materia);
    }

    public Optional<Materia> updateMateria(String id, Materia updatedMateria) {
        return materiaRepository.findById(id).map(materia -> {
            materia.setTitle(updatedMateria.getTitle());
            materia.setDescription(updatedMateria.getDescription());
            materia.setBackgroundImage(updatedMateria.getBackgroundImage());

            return materiaRepository.save(materia);
        
        });
    }

    public boolean deleteMateria(String id) {
        return materiaRepository.findById(id).map(evento -> {
            materiaRepository.delete(evento);
            return true;
        }).orElse(false);
    }
}