




import express from 'express';

const app = express();

/* O 'use' é para usarmos um plugin. Nesse caso que estamos aprendendo API REST, 
   estamos inserindo o 'express.json()' que é para o sistema entender informações em formato json*/
app.use(express.json());

//Rota: Endereço completo da nossa requisição
//Recurso:  Qual entidade estamos acessando do sistema

//GET: Buscar uma ou mais informações do back-end
//POST: Criar uma nova informação no back-end
//PUT: Atualizar uma informação existente no back-end
//DELETE: Remover uma informação do back-end

//POST http://localhost:3333/users = Criar um usuário
//GET http://localhost:3333/users = Listar usuários
//GET http://localhost:3333/users/5 = Buscar dados do usuário com ID 5

/* TIPOS DE PARÂMETRO

  # request.param --> Parâmetros que vem na própria rota que identificam um recurso
    //Ele é muito usado quando queremos pesquisar um único usuário, atualizar um único usuário,
    //deletar um único usuário, ou seja, um recurso específico.
    //Eles são separados por barras: '/'
    //Exemplo: localhost:3333/users/2

 # query.param --> São parâmetros que vem na própria rota e são opcionais, para fazer filtros, paginação, etc.
   //Eles são separados por '?'
   //Exemplo: localhost:3333/users?search=on 
   //Ele não precisa ser único, pode ter dois valores. Exemplo: localhost:3333/users?search=on&search=off 

 # request.param -> É o corpo da requisição. Parametros para criação e atualização.

*/

const users = [
    'Diego', //0
    'Cleiton', //1
    'Robson', //2
    'Daniel' //3

];
   

app.get('/users',(request, response) => {
    
    // Vou forçar para pssar o que eu achar como uma String
    const search =String(request.query.search);

    console.log(search);

    /* 
      Para fazer um filtro utiliza o .filter:
      //Tenha que decidir se é pra manter os usuários filtrados ou não
      //'user' nesse caso já é cada uma das strings do array
      //Aí usa o '.includes' para ver se em cada user inclui o texto passado em parámetro 
      
    */
   /*O request.query é opcional, então pode ou não ser passado lá na rota, tanto 
     que nesse app.get não tem fixo como é no request.param 
     Aí fiz um if ternário para ver se existe a informação da variável search já que é opcional.
     Aí se ele não achar, então a variável filteredUsers vai receber todos os usuários
   
  */
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
})

//Passando parametros
//No lugar de id pode ser outro nome que eu quiser dar, mas lá depois de params também tem que ser esse nome
app.get('/users/:id', (request, response) =>{

    /*Coloquei o number para converter para número, já que ele vem como uma string
      e eu preciso dele como número para passar como indicador do array*/
    const id = Number(request.params.id);

    const user = users[id];
    return response.json(user);

});

app.post('/users', (request, response) => {

    const data = request.body;

    const users = {
      name: data.name,
      email:data.email,
      curso: data.curso

    } 
    console.log(users);


    //Return é para falar que vai devolver uma resposta e vai parar aqui, mesmo se tiver código abaixoua
    return response.json(users);
});



app.listen(3333);