package com.br.caio.ufcwwe.wweufc.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.br.caio.ufcwwe.wweufc.entities.Cinturao;
import com.br.caio.ufcwwe.wweufc.repository.CinturaoRepository;

@Service
public class CinturaoService {
    @Autowired
    private CinturaoRepository cinturaoRepository;

    public List<Cinturao> findAll() {
        return cinturaoRepository.findAll();
    }

    public Optional<Cinturao> findById(String id) {
        return cinturaoRepository.findById(id);
    }

    public Cinturao createLutador(Cinturao cinturao) {
        return cinturaoRepository.save(cinturao);
    }

    public Optional<Cinturao> updateCinturao(String id, Cinturao updatedCinturao) {
        return cinturaoRepository.findById(id).map(cinturao -> {
            cinturao.setName(updatedCinturao.getName());
            return cinturaoRepository.save(cinturao);
        });
    }

    public boolean deleteCinturao(String id) {
        return cinturaoRepository.findById(id).map(cinturao -> {
            cinturaoRepository.delete(cinturao);
            return true;
        }).orElse(false);
    }
}
