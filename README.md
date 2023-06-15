# Projeto de Loja de Quadrinhos

> Este é um projeto de uma Single Page Application de uma loja de quadrinhos que utiliza a API da Marvel para consumir dados. O objetivo é criar uma aplicação que permita aos usuários explorar quadrinhos, visualizar detalhes e realizar compras.

## Funcionalidades
- Tela de lista de quadrinhos: Exibe uma lista de quadrinhos obtidos da API da Marvel, apresentando informações como título, imagem, descrição e preço. Os usuários podem navegar pela lista e visualizar os detalhes de cada quadrinho.

- Tela de detalhe do quadrinho: Mostra informações detalhadas sobre um quadrinho específico, incluindo título, imagem, descrição, preço, criadores, personagens e outras informações relevantes. Os usuários podem adicionar o quadrinho ao carrinho de compras.

- Funcionalidade de checkout: Permite aos usuários visualizar e finalizar a compra dos quadrinhos adicionados ao carrinho. 

## Tecnologias Utilizadas
- Framework JavaScript: [Next.js](https://nextjs.org/) - Escolhido por ser uma estrutura de desenvolvimento web que combina React, roteamento e recursos avançados de renderização do lado do servidor. O Next.js é altamente escalável e oferece uma excelente experiência de desenvolvimento.

- Estilização: Tailwind CSS - Utilizado para criar estilos responsivos e facilitar o desenvolvimento de interfaces consistentes.



## Instalação
Clone este repositório em sua máquina local.
``` bash
git clone  https://github.com/iugorsette/marvel
```
Certifique-se de ter o Node.js instalado. Para verificar a versão do Node.js, execute o comando node -v no terminal.
No diretório raiz do projeto, execute o comando abaixo para instalar as dependências.
``` bash
npm install
```

## Configuração da API da Marvel
Para utilizar a API da Marvel, é necessário obter uma chave de API válida. Siga as etapas abaixo para configurar a chave de API:

Acesse o [site](https://developer.marvel.com/) da Marvel Developer Portal e crie uma conta.
Após fazer login, acesse a seção "My Developer Account" e obtenha sua chave de API.
No diretório raiz do projeto, crie um arquivo .env.local e adicione a seguinte linha: MARVEL_API_KEY=SUA_CHAVE_DE_API.
Substitua "SUA_CHAVE_DE_API" pela sua chave de API obtida anteriormente.

## Executando o Projeto
No diretório raiz do projeto, execute o comando abaixo para iniciar a aplicação. Acesse http://localhost:3000 em seu navegador para visualizar a loja de quadrinhos.
``` bash
npm run dev
```
