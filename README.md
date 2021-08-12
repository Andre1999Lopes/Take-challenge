# Take Challenge
Chatbot criado através da plataforma [BLiP](https://blip.ai) para a prova técnica da [Take Blip](https://take.net).
É possível interagir com o chatbot a partir [deste link](https://chat.blip.ai/?appKey=Zmlyc3Rib3Q1OTowNzY2ZDUwNS05MzA4LTRkNGMtYjc2Mi1hZTkzNzBjOWY5ZmU=)

## Funcionamento do chatbot

O chatbot foi desenvolvido para passar os valores da Take Blip e para mostrar também o resultado do desafio da prova técnica, que era listar os 5 repositórios mais antigos do GitHub da Take.

## Comandos (para distribuições Linux baseadas em Debian)

`yarn zip-function`: cria um arquivo .zip com os códigos necessários para o funcionamento da API.

`yarn zip-layer`: cria um arquivo .zip com o conteúdo necessário para a criação de uma camada do AWS Lambda para o correto funcionamento da API.

`yarn deploy-function`: implanta a API no AWS Lambda. É necessário que sua máquina esteja configurada com o AWS CLI v2.

`yarn deploy-layer`: implanta a camada do AWS Lambda para o correto funcionamento da função Lambda. É necessário que sua máquina esteja configurada com o AWS CLI v2.