package com.br.caio.ufcwwe.wweufc.entities;

import com.br.caio.ufcwwe.wweufc.entities.enums.Empresa;

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
@Table(name="tb_cinturao")
public class Cinturao {
    @Id
    @GeneratedValue(strategy=GenerationType.UUID)
    private String id;

    private String name;
    private String image;
    private String description;
    private Empresa empress;
    private String dateCreation;
    private String currentChamp;
}
