// Knex é para eu poder fazer as chamadas de banco de dados (linguagem SQL) utilizado Javascript ao invés de SQL
// Ele meio que padroniza o banco de dados, aí posso trocar até de banco de dados que ele vai entender a linguagem
// Porque de banco de dados para banco de dados tem umas alterações na linguagem SQL
import knex from 'knex';

// Por padrão para utilizar caminhos de arquivos
import path from 'path';

const connection = knex({

    //Antes de utilizar, eu instalei o sqlite3 utilizando no terminal 'npm install sqlite3'
    client: 'sqlite3',

    // Fala a localização do meu arquivo do banco de dados 'database.sqlite'
    connection: {
       
        /** **O 'path.resolve()' é uma função lá do 'path' que eu importei, e ele uni caminhos.
             *Isso é importante porque tem certos sistemas operacionais que o modo de escrever os 
             *caminhos são diferentes tipo no linux que a barra é invertida, tipo: pasta/arquivo, 
             *e no windows é: pasta\arquivo 
             *Então o 'path.resolve()' PADRONIZA esse caminho
        */
        /* **O '__dirname' é uma variável global que vai retornar pra gente o diretório do arquivo 
            *que a gente tá executando aqui 
        */
        filename: path.resolve(__dirname,'database.sqlite'),
    },
});

//Exportando a conexão do banco de dados
export default connection;

/* =========================== */

/* MIGRATIONS -> Histórico do banco de dados

   //Por você trabalhar com outras pessoas, ou simplesmente trabalhar em um sistema grande,
   //então você terá que criar novas tabelas, editar tabelas, deletar tabelas, alterar campos, etc.
   //E cada vez que você for fazer uma dessas alterações, você irá criar uma nova 'Migration'.
   //Enfim, o Migration é um arquivo que coloca o que precisa ser feito dentro do banco de dados
   //quando aquela versão do software for executada.
   //Então teremos MIGRATIONS para criar tabelas, editar tabelas, remover tabelas; assim dependendo do 
   //do ponto da história do nosso projeto.
   //Isso ajuda PRINCIPALMENTE a gente conseguir trabalhar com mais de um desenvolvedor dentro de um mesmo projeto.

*/
