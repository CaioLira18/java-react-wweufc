package com.br.caio.ufcwwe.wweufc.entities;

import java.time.LocalDate;

import com.br.caio.ufcwwe.wweufc.entities.enums.MateriaEnum;

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
@Table(name="tb_materias")
public class Materia {
    

    @Id
    @GeneratedValue(strategy=GenerationType.UUID)
    private String id;

    private String title;
    
    @Column(length = 5000)
    private String description;

    private String backgroundImage;
    private LocalDate date;
    private String autor;
    private MateriaEnum type;
}
