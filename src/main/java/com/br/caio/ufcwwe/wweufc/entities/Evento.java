package com.br.caio.ufcwwe.wweufc.entities;

import com.br.caio.ufcwwe.wweufc.entities.enums.Empresa;

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
@Table(name="tb_eventos")
public class Evento {
    
    @Id
    @GeneratedValue(strategy=GenerationType.UUID)
    private String id;

    private String name;
    private String date;
    private String location;
    private String horario;
    private String streamingLogo;

    @Column(length = 2000)
    private String description;

    private Empresa empress;
}
