<!-- # Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a> -->
<!-- 
Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/) -->

# Registro de Testes de Software

## Página Home - CT 01 

Nessa página podemos navegar e conhecer todo o site, os botões estão todos redirecionados para a navegação do site 

![home](./img/home.png)

Abaixo podemos visualizar no teste o que acontece ao clicar em cada botão:  

Ao clicar no botão inicio o user permanece na mesma página:
![home](./img/home.png)

Ao clicar no botão Quero doar o site direciona para essa página de cadastro do Pet 

![cadastroPet](./img/etapa4/cadastroPet.png)

Ao clicar no botão Quero adotar ou conheça nossos pets, o site direciona para a página de animais no qual o site já possui cadastro:

![adotar](./img/etapa4/adotar.png)

Ao clicar no botão Entrar , o site direciona para a página de login:

![login](./img/etapa4/login.png)

Quando a tela fica do tamanho de mobile o menu muda para melhor visualização :

![home](./img/etapa4/homeTestes/homeResponsiva.png)

## Página Cadastro do cliente - CT 02 

#### testes de navegação
Abaixo podemos visualizar no teste o que acontece ao clicar em cada botão:  

 
Ao clicar no botão inicio o usuário é redirecionado para a home:
![home](./img/etapa4/home.png)

Ao clicar no botão Quero doar o site direciona para essa página de cadastro do Pet 

![cadastroPet](./img/etapa4/cadastroPet.png)

Ao clicar no botão Quero adotar ou conheça nossos pets, o site direciona para a página de animais no qual o site já possui cadastro:

![adotar](./img/etapa4/adotar.png)

Ao clicar no botão Entrar , o site direciona para a página de login:

![login](./img/etapa4/login.png)

Quando a tela fica do tamanho de mobile o menu muda para melhor visualização :

![home](./img/etapa4/homeTestes/homeResponsiva.png)

#### testes funcionais

Para validar os dados do cadastro do cliente no primeiro campo é necessário que tenha nome e sobrenome. Caso não preencha nada aparece um erro. 

![cadUserErro1](./img/etapa4/cadastroUserTestes/cadUserError1.png)

Caso preencha somente o primeiro nome ira aparecer um erro informando que deverá informar um sobrenome  

![cadUserErro2](./img/etapa4/cadastroUserTestes/cadUserError2.png)

Apos ter preenchido nome e sobrenome é necessário informar um email, caso não preencha os dados e apresentando um erro, informando a obrigatoriedade de colocar o email.  

![cadUserErro3](./img/etapa4/cadastroUserTestes/cadUserError3.png)

Ira aparece um erro caso o email não seja preenchido de forma correta. 

![cadUserErro4](./img/etapa4/cadastroUserTestes/cadUserError4.png)

A senha deve conter no minino 8 dígitos caso não contenha ira aparece um erro.  

![cadUserErro5](./img/etapa4/cadastroUserTestes/cadUserError5.png)

A senha deve ser igual, caso não seja aparece um erro, informando que a senha não coinside  

![cadUserErro6](./img/etapa4/cadastroUserTestes/cadUserError6.png)

Caso todos os dados estejam corretos e demonstrado um pop-up informando que receberá um email para confirmação dos dados. 

![cadUserTeste](./img/etapa4/cadastroUserTestes/cadUserTeste.png)

## Página Adotar - CT 03 

Nessa página de adotar, se a pessoa estiver logada, é apresentada para a mesma todos os pets disponivéis para adoção. 

![adotarTeste](./img/etapa4/adotarTestes/adotarTeste1.png)

Se a pessoa clicar em algum filtro como por exemplo o de gatos, o site deverá filtrar todos os pets existente e mostrar apenas os pets do tipo gato para ela. Como mostrado na tela abaixo: 

![adotarTeste2](./img/etapa4/adotarTestes/adotarTeste2.png)

## Página Login - CT 04 

Após  acessar a página de login 

![login](./img/etapa4/loginTestes/loginTeste1.png)

Caso não seja preenchido o e-mail e senha e cliquado no botão “Login” será informado a mensagem “preencha seu e-mail" e “preencha sua senha” 

![login](./img/etapa4/loginTestes/loginTeste2.png)

Caso informe e-mail invalido apresentará a mensagem “Formato de e-mail invalido” 

![login](./img/etapa4/loginTestes/loginTeste3.png)

Caso informe a senha invalida apresentará a mensagem “A combinação de e-mail e senha está incorreta” 


![login](./img/etapa4/loginTestes/loginTeste4.png)

Caso preencha o email e senha validos e previamente cadastrados 

![login](./img/etapa4/loginTestes/loginTeste5.png)

Assim tendo acesso as funcionalidades da página adotar 

![adotar](./img/etapa4/adotarTestes/adotarTeste1.png)

Ao clicar no botão “Esqueceu a sua senha?” será direcionado a Recuperar senha 

![login](./img/etapa4/loginTestes/loginRecuperarSenha.png)

Ao clicar no botão “Não tem conta? Criar” será direcionado a página cadastro cliente 

![cadUser](./img/etapa4/cadastroUserTestes/cadUserTeste.png)

Ao clicar no botão “Inicio” será direcionado a página Home 

![home](./img/etapa/home.png)

Quando a tela fica do tamanho de mobile o menu muda para melhor visualização 

![login](./img/etapa4/loginTestes/loginResponsivo.png)


## Página do Pet - CT 05

Ao clickar no botão “Quero Adotar”, recebemos o retorno que adotamos o pet em questão. 

![pet](./img/etapa4/petTestes/petTeste1.png)

Após o evento do click em “Quero Adotar”, Aparecerá uma mensagem confirmando que o pet foi adotado 

![pet](./img/etapa4/petTestes/petTeste2.png)


## CT-06 - Cadastrar Pet – Cadastro de Pet 

1. Acessar a página home do site. 

![home](./img/etapa4/home.png)

2. Navegar até a seção "Cadastro Pet". 

![cadPet](./img/etapa4/cadastroPet.png)

3. Preencher todos os campos do formulário de cadastro do pet: nome, idade, tipo, link da foto, sexo e descrição. 

![cadPet](./img/etapa4/cadastroPetTestes/cadPetTeste1.png)

4. Clicar no botão "Cadastrar pet" e acesse a página adotar para confirmar

![cadPet](./img/etapa4/cadastroPetTestes/cadPetTeste2.png)

## CT-07- Cadastrar Pet – Campos não preenchidos 

1. Acessar a página home do site. 

![home](./img/etapa4/home.png)


2. Navegar até a seção "Cadastro Pet". 

3. Deixe em branco os campos obrigatórios do formulário de cadastro de pet: nome, idade, tipo, link da foto, sexo e descrição. 

![cadPet](./img/etapa4/cadastroPet.png)

4. Clicar no botão "Cadastrar pet". 

![cadPet](./img/etapa4/cadastroPetTestes/cadPetTeste3.png)


## CT-08 Cadastrar Pet – Campos preenchidos incorretamente 

1. Acessar a página home do site. 

![home](./img/etapa4/home.png)


2. Navegar até a seção "Cadastro Pet". 

![cadPet](./img/etapa4/cadastroPet.png)

3. Preencha todos os campos do formulário de cadastro do pet com informações inválidas, seguindo as restrições abaixo: 

* Nome: Digite um nome com menos de 3 caracteres. 

* Tipo: Não há restrições específicas. 

* Link: Digite um link que não siga o formato "https://(alguma coisa).com/(alguma coisa)". 

* Idade: Digite um valor menor que 0 ou maior que 30. 

* Sexo: Não há restrições específicas. 

* Descrição: Digite uma descrição com mais de 120 caracteres. 

![cadPet](./img/etapa4/cadastroPetTestes/cadPetTeste4.png)

4. Clicar no botão "Cadastrar pet". 

![cadPet](./img/etapa4/cadastroPetTestes/cadPetTeste5.png)