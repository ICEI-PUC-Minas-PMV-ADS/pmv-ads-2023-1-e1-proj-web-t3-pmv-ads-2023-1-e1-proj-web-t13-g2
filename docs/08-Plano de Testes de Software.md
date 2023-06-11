<!-- # Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas. ## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7) -->


# Plano de Testes de Software 

Os requisitos para realização dos testes de software são: 

* Site publicado na Internet 

* Navegador da Internet - Chrome, Firefox ou Edge 

* Conectividade de Internet para acesso às plataformas (APISs) 

 

## Os testes funcionais a serem realizados no aplicativo são descritos a seguir. 



### Caso de Teste 

CT-01  - Home – Aonde pode-se visualizar a introdução do site  

 

##### Requisitos Associados 

RNF-01 - O site deverá ser responsivo se adaptando para telas de smartphones. 

RNF-02 - O site deverá apresentar um desempenho estável, com um tempo de resposta adequado para as ações que envolvam o processamento  

RNF-03  - O site deverá seguir um padrão de design para cores dos componentes integrantes das páginas, tamanho e tipo de fonte de escrita  

##### Objetivo do Teste 

Verificar se a página esta funcional e se todos os botões estão corretos e se as cores e textos estão atrativos para os potenciais usuários. 

##### Passos 

1) Acesar o Navegador 

2) Informar o endereço do Site 

3) Visualizar a página principal 

##### Critérios de Êxito 

As imagens e textos devem ser apresentados de maneiras corretas em quaisquer dispositivos. 

 


### Caso de Teste 

CT-02  - Cadastro do cliente – Poderá ter acesso ao site de forma que poderá doar e adotar 

Requisitos Associados 

RF-01 - Registro do usuário no nosso sistema. 

RF-02 - O usuário poderá cadastrar pets para adoção 

RNF-01 - O site deverá ser responsivo se adaptando para telas de smartphones. 

 

 

##### Objetivo do Teste 

Verificar se a página esta funcional e se todos os botões estão corretos e se as cores e textos estão atrativos para os potenciais usuários. Se todos os campos estão corretos e se há critérios de validação de dados. 

 

##### Passos 

1) Acesar o Navegador 

2) Informar o endereço do Site 

3) Visualizar a página principal 

4) Entrar  

5) Criar 

 

##### Critérios de Êxito 

As imagens e textos devem ser apresentados de maneiras corretas em quaisquer dispositivos. 

Se os campos possuem critérios de validação 

Senha deve conter 8 caracteres e condizerem  

Teve conter um endereço de email valido 

Teve conter nome e sobrenome  

 

 
### Caso de Teste 

CT-03  - Adotar – Aonde pode-se visualizar os pets que estão disponíveis para adoção 

 

##### Requisitos Associados 

RNF-01 - O site deverá ser responsivo se adaptando para telas de smartphones. 

RNF-02 - O site deverá apresentar um desempenho estável, com um tempo de resposta adequado para as ações que envolvam o processamento  

RNF-03  - O site deverá seguir um padrão de design para cores dos componentes integrantes das páginas, tamanho e tipo de fonte de escrita  

##### Objetivo do Teste 

Verificar se a página esta funcional e se todos os filtros estão funcionando corretamente 

Passos 

1) Acesar o Navegador 

2) Informar o endereço do Site 

3) Visualizar a página principal e clicar em quero adotar para ser redirecionar para a página adotar 

4) Clicar em qualquer um dos filtros  

##### Critérios de Êxito 

Os pets devem ser filtrados e a tela deve apresentar apenas os pets que se encaixam nesse filtro 

 

 
### Caso de Teste 

CT-04 – Login – Permite o usuário previamente cadastrado ter acesso a funcionalidades a página de adotar e doar 

Requisitos Associados 

RNF-01 - O usuário terá acesso ao nosso sistema  

RNF-02 - O site deverá ser responsivo se adaptando para telas de smartphones. 

##### Objetivo do Teste 

Verificar se a página esta funcional e se todos os botões estão corretos e se as cores e textos estão atrativos para os potenciais usuários. Se todos os campos estão corretos e se há critérios de validação de dados. 

##### Passos 

1) Acessar o Navegador. 

2) Informar o endereço do Site. 

3) Visualizar a página principal e clicar em entrar para ser redirecionar para a página Login.  

4) Informar o e-mail e senha previamente cadastrados em seus respectivos campos. 

5) Após informar os dados clicar no botão Login. 

 

##### Critérios de Êxito 

As imagens e textos devem ser apresentados de maneiras corretas em quaisquer dispositivos. 

Se os campos possuem critérios de validação 

Campo e-mail de ser preenchido  

E-mail deve ser valido 

Campo senha deve ser preenchido  

E-mail e senha tem que ser compatíveis e validos. 



### Caso de Teste 

CT-05  - Adotar – Aonde pode-se visualizar o pet escolhido para adoção. 

 

##### Requisitos Associados 

RNF-01 - O site deverá ser responsivo se adaptando para telas de smartphones. 

RNF-02 - O site deverá apresentar um desempenho estável, com um tempo de resposta adequado para as ações que envolvam o processamento  

RNF-03  - O site deverá seguir um padrão de design para cores dos componentes integrantes das páginas, tamanho e tipo de fonte de escrita  

##### Objetivo do Teste 

Verificar se a página esta funcional e se apresenta algum retorno ao adotar o pet. 

##### Passos 

1) Acesar o Navegador 

2) Informar o endereço do Site 

3) Visualizar a página principal e clicar em quero adotar para ser redirecionar para a página adotar 

4) Clicar em adotar o pet  

##### Critérios de Êxito 

Aparecer mensagem no navegador avisando que adotou um pet. 



### Caso de Teste 

CT-06 - Cadastrar Pet – Cadastro de Pet 

##### Requisitos Associados 

RNF-01 - O site deverá ser responsivo se adaptando para telas de smartphones. 

RF-01 - Adicionar pets para adoção. 

##### Objetivo do Teste 

Validar que, ao preencher corretamente o formulário de cadastro, o pet é adicionado com sucesso à lista de pets para adoção. 

##### Passos 

1) Acessar a página home do site. 

2) Navegar até a seção "Cadastro Pet". 

3) Preencher todos os campos do formulário de cadastro do pet: nome, idade, tipo, link da foto, sexo e descrição. 

4) Clicar no botão "Cadastrar pet". 

##### Critérios de Êxito 

Após o cadastro, ser redirecionado para a página de adoção de pets e visualizar o pet cadastrado na lista de adoção. 

 

### Caso de Teste 

CT-07- Cadastrar Pet – Campos não preenchidos 

##### Requisitos Associados 

RNF-01 - O site deverá ser responsivo se adaptando para telas de smartphones. 

RF-01 - Não permitir o cadastro de um pet se algum campo obrigatório não for preenchido corretamente. 

##### Objetivo do Teste 

Validar que o pet não foi cadastrado quando nenhum campo obrigatório é preenchido corretamente. 

##### Passos 

1) Acessar a página home do site. 

2) Navegar até a seção "Cadastro Pet". 

3) Deixe em branco os campos obrigatórios do formulário de cadastro de pet: nome, idade, tipo, link da foto, sexo e descrição. 

4) Clicar no botão "Cadastrar pet". 

##### Critérios de Êxito 

A página deve exibir mensagens de erro destacando os campos obrigatórios não preenchidos. Os campos não preenchidos devem ser realçados visualmente (em vermelho) e as mensagens de erro correspondentes devem ser exibidas abaixo dos campos afetados. 

 

### Caso de Teste 

CT-08 Cadastrar Pet – Campos preenchidos incorretamente 

##### Requisitos Associados 

RNF-01 - O site deverá ser responsivo se adaptando para telas de smartphones. 

RF-01 - Não permitir o cadastro de um pet se algum campo obrigatório não for preenchido corretamente. 

##### Objetivo do Teste 

Validar que, caso os campos sejam preenchidos com valores inválidos, o pet não será cadastrado. 

##### Passos 

1) Acessar a página home do site. 

2) Navegar até a seção "Cadastro Pet". 

3) Preencha todos os campos do formulário de cadastro do pet com informações inválidas, seguindo as restrições abaixo: 

    Nome: Digite um nome com menos de 3 caracteres. 

    Tipo: Não há restrições específicas. 

    Link: Digite um link que não siga o formato "https://(alguma coisa).com/(alguma coisa)". 

    Idade: Digite um valor menor que 0 ou maior que 30. 

    Sexo: Não há restrições específicas. 

    Descrição: Digite uma descrição com mais de 120 caracteres. 

4) Clicar no botão "Cadastrar pet". 

##### Critérios de Êxito 

A página deve exibir mensagens de erro destacando os campos preenchidos de forma incorreta. Os campos inválidos devem ser realçados visualmente (em vermelho) e as mensagens de erro correspondentes devem ser exibidas abaixo dos campos afetados. 

 
