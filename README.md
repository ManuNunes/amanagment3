## SOBRE O AMANAGEMENT3
Venho desenvolvendo essa solução , baseada na necessidade interna do setor da empresa em que trabalho em notificar e registrar informações de atendimentos de clientes.

## Finalidade
Registrar atendimentos e criar observações sobre clientes, documentar procedimentos para que seja acessado por todos do setor quando julgar necessário, para melhor atender a necessidade e/ou situação atual do cliente.

## Tecnologias utilizadas
* Typescript
* Postgres
* Typeorm
* NodeJS
* Javascript


### Iniciando o Amanagement3
<code>yarn dev ou npm run dev</code> <- para ferramenta ambiente de desenvolvimento
<br>
<strong>OBS.:</strong> No momento o ambiente está sendo criado pensando na funcionalidade, mas pretendo adicionar testes unitários e de integração com JEST

### ROTAS
  - /register -> Recebe dados de criação de usuário no formato JSON ( username, email,password)
  - /sessions -> Faz o login com as credenciais de email e password e retorna o token JWT
  
  ROTAS PRIVADAS
  - /attendance ( POST e GET)
  - 