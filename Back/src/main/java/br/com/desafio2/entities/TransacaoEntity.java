package br.com.desafio2.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "transacao")
public class TransacaoEntity {
    @Id
    @Column(name = "id_transacao", nullable = false, unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "data_transacao", nullable = false)
    private String data;

    @Column(name = "valor_transacao", nullable = false)
    private double valor;

    @Column(name = "categoria_transacao")
    private String categoria;
}
