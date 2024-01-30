# Controle de Transações Financeiras

Este projeto foi desenvolvido como parte do bootcamp, aplicando conhecimentos em Spring Boot e Angular para criar uma aplicação de controle de transações financeiras. A aplicação permite que o usuário gerencie suas transações financeiras, com funcionalidades como receber transações em lote ou individualmente, listar todas as transações, filtrar transações por categoria, adicionar, alterar e excluir transações, limpar a base de transações e calcular a totalização por categoria.

## Tecnologias Utilizadas

- Angular (Frontend)
- TypeScript
- HTML
- CSS
- Spring Boot (Backend)
- Java
- Spring Data JPA
- Spring Web
- Swagger (Documentação da API)
- Banco de Dados Relacional

## Funcionalidades

- Adicionar transações em lote ou individualmente
- Limpar a base de transações
- Alterar ou excluir uma transação por ID 
- Visualizar os dados de uma transação
- Totalizar valores por categoria
- Filtrar por categoria

## Configuração e Execução

### Frontend

1. Certifique-se de ter o Angular CLI instalado globalmente em sua máquina.
2. Clone este repositório.
3. No diretório do projeto, execute `npm install` para instalar as dependências.
4. Execute `ng serve` para iniciar o servidor de desenvolvimento. Acesse `http://localhost:4200/`.

### Backend

1. Certifique-se de ter o Java e o Maven instalados em sua máquina.
2. Clone este repositório.
3. Importe o projeto backend em sua IDE.
4. Execute o comando `mvn spring-boot:run` para iniciar o servidor backend. Por padrão, a aplicação estará disponível em `http://localhost:8080`.

### Banco de Dados

Há também a query de um banco de dados com exemplos para serem inicializados no sistema.

## Documentação da API

A documentação da API está disponível em `http://localhost:8080/swagger-ui.html`, fornecendo detalhes sobre todos os endpoints, parâmetros e respostas disponíveis.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou abrir issues para relatar bugs ou sugerir melhorias.

