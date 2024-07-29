# Diaslog - Prova/Teste Front-end (Angular)

## Netlify:
<a href="https://66a783ef5b48e5308fdbbfd4--famous-cupcake-f1db7d.netlify.app/" target="_blank">https://66a783ef5b48e5308fdbbfd4--famous-cupcake-f1db7d.netlify.app/</a>

## Instruções:
```
git clone https://github.com/f1d31/diaslog-desafio.git
npm install
ng serve
```

## Sobre:

Este projeto é uma aplicação web desenvolvida com Angular, que permite ao usuário buscar um endereço e exibir sua localização no mapa utilizando a API do Google Maps. A aplicação segue o princípio de layout responsivo, com uma abordagem mobile first, e utiliza vários frameworks JavaScript/CSS conforme necessário, incluindo Angular Material para os componentes da interface do usuário.

## Pré-requisitos:

Antes de executar a aplicação, certifique-se de ter o seguinte instalado em seu sistema:

* Node.js (versão mais recente)
* Angular CLI (versão mais recente)

## Decisões de Design:

* Framework Angular: Escolhido pela sua robustez e suporte a desenvolvimento de aplicações SPA (Single Page Applications).
* Angular Material: Utilizado para fornecer componentes de interface de usuário modernos e responsivos.
* Pré-processador CSS (SCSS): Utilizado para facilitar a escrita de estilos e manutenção do código CSS.
* Layout Responsivo: Adotado para garantir uma boa experiência em dispositivos móveis e desktops.
* Repository Pattern: Design Pattern implementado para isolar a lógica de acesso a dados e promover um design mais limpo.
* API do Google Maps: Selecionada pela sua precisão e facilidade de uso.

## Estrutura do Projeto:

A estrutura do projeto está organizada da seguinte forma:

* src/: Contém todo o código fonte da aplicação.
	* app/: Contém os componentes principais, serviços e rotas.
    	* app.component.html: Template principal do componente.
        * app.component.scss: Estilos específicos do componente.
        * app.component.ts: Lógica do componente.
        * app.config.ts: Configurações da aplicação.
        * app.routes.ts: Definições de rotas.
        * map.repository.ts: Repositório de dados para o mapa, seguindo o design pattern de Repository.
        * map.service.ts: Serviço que se comunica com a API do Google Maps.
        * map.service.spec.ts: Testes unitários para o serviço de mapa.
* environments/: Configurações de ambiente.
	* environment.ts: Configuração para desenvolvimento.
    * environment.prod.ts: Configuração para produção.
* index.html: Página HTML principal.
* main.ts: Arquivo principal de entrada da aplicação.
* styles.scss: Estilos globais da aplicação.


## Descrição do teste:

Você deverá criar um projeto, com layout responsivo, mobile first, utilizando o framework Angular na versão mais recente possível, e outros frameworks Javascript /CSS que julgar necessário. Utilize também um pré-processador de CSS a sua escolha. Após o término do desenvolvimento, publicar o código fonte no Github, e no arquivo Readme do repositório, descrever como executar seu projeto, quais foram suas decisões, como você organizou o projeto etc. Quanto mais detalhes, melhor!

Esta aplicação consiste em um campo de busca, que deve ser centralizado na tela. O usuário deverá informar um endereço neste campo, e ao apertar a tecla Enter, a aplicação deverá realizar uma busca do endereço na API do Google Maps. Caso o endereço exista, o campo de texto será deslocado para o topo da página, e um mapa com o endereço localizado deverá ser exibido no restante da tela.

Além do mapa, mostrar todas outras informações relevantes retornadas pela API.