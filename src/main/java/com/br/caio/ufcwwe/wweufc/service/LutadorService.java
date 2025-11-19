package com.br.caio.ufcwwe.wweufc.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.caio.ufcwwe.wweufc.entities.Lutador;
import com.br.caio.ufcwwe.wweufc.repository.LutadorRepository;



@Service
public class LutadorService {

    @Autowired
    private LutadorRepository lutadorRepository;

    public List<Lutador> findAll() {
        return lutadorRepository.findAll();
    }

    public Optional<Lutador> findById(String id) {
        return lutadorRepository.findById(id);
    }

    public Lutador createLutador(Lutador lutador) {
        return lutadorRepository.save(lutador);
    }

    public Optional<Lutador> updateLutador(String id, Lutador updatedLutador) {
        return lutadorRepository.findById(id).map(lutador -> {
            lutador.setName(updatedLutador.getName());
            lutador.setType(updatedLutador.getType());
            lutador.setBackground(updatedLutador.getBackground());
            lutador.setAge(updatedLutador.getAge());
            lutador.setDescription(updatedLutador.getDescription());
            lutador.setEmpress(updatedLutador.getEmpress());
            lutador.setAchievement(updatedLutador.getAchievement());
            lutador.setImageRender(updatedLutador.getImageRender());
            return lutadorRepository.save(lutador);
        });
    }

    public boolean deleteLutador(String id) {
        return lutadorRepository.findById(id).map(lutador -> {
            lutadorRepository.delete(lutador);
            return true;
        }).orElse(false);
    }
}