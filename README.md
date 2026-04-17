# Teste Técnico Front-End - Ellos Design

Este repositório contém a resolução do teste técnico para a vaga de Desenvolvedor Front-End, com a implementação de um bônus Full-Stack (PHP + MySQL) para o formulário de captação de leads.

## Deploy Live (Avaliação de UI/UX)

Para avaliar a responsividade, o pré-processamento de CSS e as animações de forma imediata, acesse o link do projeto em produção:

🔗 ** **

> **Nota:** A hospedagem acima é focada exclusivamente na entrega de arquivos estáticos (Front-End). Para avaliar a submissão do formulário no Banco de Dados, siga as instruções de execução local abaixo.

---

## Tecnologias Utilizadas

* **HTML5** (Semântico)
* **SASS / SCSS** (Pré-processador CSS com arquitetura componentizada)
* **CSS3** (Animações com `@keyframes` e pseudo-classes)
* **PHP** (Processamento de formulário e prevenção de SQL Injection)
* **MySQL** (Persistência de dados)

---

## Como executar o projeto localmente (Avaliação Full-Stack)

Para testar o motor do banco de dados e verificar a gravação dos leads via formulário, será necessário um ambiente de servidor local (como o **XAMPP**).

### Pré-requisitos
* XAMPP (com Apache e MySQL instalados).

### Passo a Passo

1. **Clone o repositório** dentro da pasta "htdocs" do seu XAMPP:
   ```bash
   git clone [https://github.com/Rhyan-S/teste-frontend-developer.git](https://github.com/Rhyan-S/teste-frontend-developer.git)

2. **Inicie os serviços:** Abra o painel do XAMPP e dê "Start" no **Apache** e no **MySQL**.
3. **Importe o Banco de Dados:**
   * Acesse "http://localhost/phpmyadmin" no seu navegador.
   * Crie um banco de dados chamado "ellos_db".
   * Vá na aba **"Importar"** e faça o upload do arquivo "ellos_db.sql" (disponível na raiz do projeto).
4. **Acesse o projeto:** * No navegador, digite "http://localhost/teste-frontend-developer".
   * Preencha o formulário e clique no botão de envio. Você poderá conferir os dados sendo gravados diretamente na tabela "leads" no seu phpMyAdmin.

---

Desenvolvido com dedicação por **Rhyan** 