# Banco de Dados - Transações

Este banco de dados faz parte do projeto e é responsável por armazenar as transações realizadas.

## Estrutura da Tabela

A tabela `transacao` possui os seguintes campos:

- `id_transacao`: Identificador único da transação (chave primária).
- `data_transacao`: Data da transação.
- `valor_transacao`: Valor da transação.
- `categoria_transacao`: Categoria da transação.

## Query de Criação da Tabela

Caso queira inicializar sua tabela com as id das transações do zero, execute o comando a seguir e depois siga com o restante dos comandos. Isso vai fazer com que a tabela seja excluida e depois recriada.

```sql
DROP TABLE IF EXISTS desafio2.transacao;
```

```sql
CREATE TABLE desafio2.transacao (
    id_transacao INT NOT NULL AUTO_INCREMENT,
    data_transacao DATE NOT NULL,
    valor_transacao FLOAT NOT NULL,
    categoria_transacao VARCHAR(45) NOT NULL,
    PRIMARY KEY (id_transacao)
);
```

## Exemplo de Dados

A tabela `transacao` foi inicializada com os seguintes dados de exemplo:

```sql
INSERT INTO desafio2.transacao (data_transacao, valor_transacao, categoria_transacao)
VALUES 
  ("2023-02-15", 80.00, "alimentacao"),
  ("2023-02-16", -20.00, "transporte"),
  ("2023-02-17", 50.00, "alimentacao"),
  ("2023-02-18", -10.00, "alimentacao"),
  ("2023-02-19", -30.00, "transporte"),
  ("2023-02-20", 100.00, "lazer");
```

## Consulta de Dados

Para visualizar todos os dados da tabela `transacao`, execute a seguinte consulta:

```sql
SELECT * FROM desafio2.transacao;
```