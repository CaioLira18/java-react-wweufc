package com.br.caio.ufcwwe.wweufc.entities;

import com.br.caio.ufcwwe.wweufc.entities.enums.ChampionEnum;
import com.br.caio.ufcwwe.wweufc.entities.enums.Empresa;
import com.br.caio.ufcwwe.wweufc.entities.enums.GeneroLutador;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name="tb_lutadores")
public class Lutador {
    
    @Id
    @GeneratedValue(strategy=GenerationType.UUID)
    private String id;

    private String name;
    private Empresa empress;
    private String age;

    @Column(length = 2000)
    private String description;

    private GeneroLutador genero;
    
    private String achievement;
    private String background;
    private String imageRender;
    private ChampionEnum type;

}
