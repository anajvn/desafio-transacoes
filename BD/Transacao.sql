DROP TABLE IF EXISTS desafio2.transacao;
CREATE TABLE desafio2.transacao (
    id_transacao INT NOT NULL AUTO_INCREMENT,
    data_transacao DATE NOT NULL,
    valor_transacao FLOAT NOT NULL,
    categoria_transacao VARCHAR(45) NOT NULL,
    PRIMARY KEY (id_transacao)
);

INSERT INTO desafio2.transacao (data_transacao, valor_transacao, categoria_transacao)
VALUES 
  ("2023-02-15",80.00,"alimentacao"),
  ("2023-02-16",-20.00,"transporte"),
  ("2023-02-17",50.00,"alimentacao"),
  ("2023-02-18",-10.00,"alimentacao"),
  ("2023-02-19",-30.00,"transporte"),
  ("2023-02-20",100.00,"lazer");
  
  SELECT * FROM desafio2.transacao;