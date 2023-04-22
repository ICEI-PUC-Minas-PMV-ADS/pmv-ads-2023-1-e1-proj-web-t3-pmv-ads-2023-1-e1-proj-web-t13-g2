# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="01-Documentação de Contexto.md"> Documentação de Contexto</a></span>

<!-- Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto -->

A página inicial do site deve ser atraente e convidativa, com um layout “limpo” e fácil de navegar. Deve apresentar informações sobre o propósito do site e apresentar alguns animais que estão disponíveis para adoção. Também pode incluir depoimentos de pessoas que adotaram animais por meio do site.

O site tem como objetivo proporcionar informações sobre o processo de adoção e os requisitos para adotar um animal. Isso pode incluir informações sobre as taxas de adoção, exigências para a aprovação, termos do contrato de adoção e outros detalhes relevantes. Também pode incluir um formulário de inscrição para os interessados em adotar um animal, além de informações de contato para a organização de resgate ou abrigo.

Seguindo essas vertentes e na observação juntamente com entrevista há a possibilidade de se destacar e caracterizar o público-alvo e assim se executar a criação das personas.


## Personas

<!-- Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja. -->

As personas levantadas durante o processo de entendimento do problema são apresentadas nas figuras abaixo:

#### Ana Santos
![Ana Santos](img/personas/persona%20ana%20santos.png)

Idade: 32

Ocupação: Advogada

Descrição: Ana é bem-sucedida e mora sozinha em um apartamento na cidade. Ela é solteira e não tem filhos. Ana é apaixonada por animais desde a infância e cresceu tendo cachorros e gatos como membros da família. Ela adora passar tempo ao ar livre e gosta de correr no parque aos fins de semana. Ana está procurando adotar um animal de estimação para fazer companhia em casa e acompanhá-la em suas atividades ao ar livre.

Motivações:

●	Encontrar um animal de estimação que se “encaixe” em seu estilo de vida ativo.
●	Quer dar um lar amoroso e seguro para um animal vulnerável.
●	Está interessada em adotar um animal mais velho que já esteja treinado e socializado.
●	Quer ter a oportunidade de contribuir com organizações de resgate e abrigos por meio de doações ou voluntariado.

Frustrações: 

●	Não tem tempo para visitar abrigos de animais pessoalmente.
●	Não sabe onde encontrar animais para adoção que se encaixem em seu estilo de vida e requisitos específicos.
●	Não tem certeza se pode oferecer o ambiente adequado para um animal de estimação.

Hobbies, História: 

●	Ir ao Cinema
●	Ficar em casa
●	Atividades ao ar livre
●	Ana é apaixonada por animais desde a infância e cresceu tendo cachorros e gatos como membros da família. Ela adora passar tempo ao ar livre e gosta de correr no parque aos fins de semana. Ana está procurando adotar um animal de estimação para fazer companhia em casa e acompanhá-la em suas atividades ao ar livre.


#### Pedro da Silva
![Pedro da Silva](img/personas/persona%20pedro%20da%20silva.png)

Idade: 53

Ocupação:  Gerente de vendas

Descrição: Pedro mora em um bairro residencial com sua esposa e filhos. Eles têm um cachorro que é considerado um membro da família e adoram passar tempo juntos passeando e brincando no parque. Pedro acredita que ter um animal de estimação é uma responsabilidade importante e quer ter certeza de que ele e sua família têm tempo e recursos para cuidar adequadamente de outro animal. Ele está procurando um animal de estimação para adotar que seja amigável com crianças e possa se adaptar facilmente a sua rotina familiar agitada.

Motivações:

●	Encontrar um animal de estimação que se adapte à sua rotina familiar e seja amigável com crianças.
●	Quer dar um lar amoroso e seguro para um animal em necessidade.
●	Está interessado em adotar um animal jovem e saudável que possa crescer e envelhecer com sua família.
●	Quer ter a oportunidade de contribuir com organizações de resgate e abrigos por meio de doações ou voluntariado.

Frustrações:

●	Não sabe como encontrar um animal de estimação que se adapte bem a sua rotina agitada.
●	Não tem certeza se sua família tem tempo e recursos suficientes para cuidar adequadamente de outro animal de estimação.
●	Não sabe como escolher um animal que se “dê bem” com crianças e com outros animais em casa.

Hobbies, História: 

●	Viajar com sua família
●	Adora ler
●	Ama o seu trabalho
●	Gosta de animais 

#### Carlos Daniel
![Carlos Daniel](img/personas/persona%20carlos%20daniel.png)

Idade: 25

Ocupação:  Programador Web

Descrição: é um desenvolvedor de software que mora em SP. Ele tem um cachorro que é considerado um membro da família e adoram passar tempo juntos passeando e brincando no parque. Carlos acredita que ter um animal de estimação é uma responsabilidade importante e quer encontrar alguém confiável, amigável e responsável para que ele possa ter a certeza que seu amigo de longa data ficará em mãos seguras.

Motivações:

●	Quer dar um lar amoroso e seguro para seu companheiro.
●	Está interessado em doar seu pet, um animal jovem e saudável.
●	Quer ter a certeza que seu companheiro de longa data encontrará uma pessoa que será dócil e amável com ele.

Frustrações:

●	Não sabe como doar seu animal de estimação.
●	Não tem certeza se terá tempo e recursos suficientes para cuidar adequadamente de seu animal de estimação quando ele se mudar.
●	Não sabe como escolher uma pessoa interessada em adotar o seu pet

Hobbies, História: 

●	Tocar violão, Piano, editar vídeos.
●	Adora ler
●	Ama o seu trabalho
●	Gosta de animais 









## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA` | QUERO/PRECISO ... `FUNCIONALIDADE`                                                                                                 |PARA ... `MOTIVO/VALOR`                                                                         |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| Ana Santos          | Estou procurando adotar um animal de estimação para fazer companhia em casa e me acompanhar em minhas atividades ao ar livre.      | Sou apaixonada por animais e cresci tendo pets como membros de minha família.                  |
| Pedro da Silva      | Desejo um animal que seja afável com os meus filhos e que traga felicidade para o nosso lar.                                       | A convivência com pets é muito benefica para a saúde tanto física quanto mental                 |
| Carlos Daniel       | Quero encontrar alguém confiável que possa adotar meu cachorro.                                                                    | Para que eu possa viajar para Portugal e tenha certeza que meu pet esteja em lugar bom para ele |
<!-- Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento. -->

<!-- > **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/) -->

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Registro do usuário no nosso sistema | ALTA | 
|RF-002| O usuário deverá fazer login no sistema para poder se candidatar para a adoção do pet   | ALTA |
|RF-003| O usuário poderá cadastrar pets para adoção | ALTA | 
|RF-004| O usuário poderá se candidatar para adotar um ou mais pets   | ALTA |
|RF-005| O usuário que cadastrou os pets deve saber quem está interessado  | ALTA | 
|RF-006| O usuário que cadastrou os pets deve ter acesso a um ou mais meios de entrar em contato com o adotante  | ALTA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deverá ser responsivo se adaptando para telas de smartphones | Alta | 
|RNF-002| O site deverá apresentar um desempenho estável, com um tempo de resposta adequado para as ações que envolvam o processamento | Alta | 
|RNF-003| O site deverá seguir um padrão de design para cores dos componentes integrantes das páginas, tamanho e tipo de fonte de escrita | Média |



<!-- Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos. -->

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|01| Um pet não poderá ser adotado por duas pessoas          |
|02| Ninguém poderá se candidatar para a adoção de um pet já adotado        |

<!-- Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/) -->
