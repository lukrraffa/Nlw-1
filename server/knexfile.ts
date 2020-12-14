// Esse arquivo é um arquivo criado por mim na raiz do projeto
// É um arquivo contendo algumas configurações que não tem na conexão com o banco

import path from 'path';


/* Esse arquivo aqui mesmo sendo um arquivo typescript eu não posso utilizar a sintaxe default,
   porque infelizmente o knex não suporta essa sintaxe infelizmente
   */
module.exports = {

    //Primeiramente as mesmas coisas que tem lá no connection.ts
    client: 'sqlite3',
    connection: {
        // Ali é as pastas seguidas: src -> database > database.sqlite
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
};