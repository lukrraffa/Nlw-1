//Quando queremos nos referir ao tipo da variável Knex, colocamos com letra maiúscula, igual o tipo 'String', tipo 'Number'
// Tendo esse tipo conseguimos utilizar a inteligencia do visual studio com o TYPESCRIPT  
import Knex from 'knex';

/* ------------------------------------------------------------------------------------ */

/* **Essas duas funções 'up' e 'down' vão ser chamadas pelo próprio 'knex'
    *As duas funçoes do parâmetro vão receber a instancia do KNEX, que é uma instancia
    *de acesso ao nosso banco de dados 
    *INTERESSANTE: Já que eu importei o tipo Knex lá em cima, agora o visual studio vai entender como 
    *typescript e vai me ajudar a encontrar as funções só escrevendo 'knex.'. 
    
*/


//Essa função 'up' vai ser para realizar as alterações que a gente precisa no banco
export async function up(knex:Knex){
    //Criar a tabela pelo knex
    // Essa é a estrutura: knex.schema.createTable('nome_da_tabela', table => { campos da tabela aqui});
    return knex.schema.createTable('points', table => {
        //Campos da tabela aqui  
        table.increments('id').primary();
        table.string('image').notNullable;
        table.string('name').notNullable;
        table.string('email').notNullable;
        table.string('whatsapp').notNullable;
        table.decimal('latitude').notNullable;
        table.decimal('longitude').notNullable;
        table.string('city').notNullable;
        table.string('uf', 2).notNullable;        

    });

}

// Caso criar algo errado (campo, tabela errada), e aí preciso voltar atrás
// que no caso deleta a tabela que a  gente criou. Seria como um "control z"
export async function down(knex:Knex){
    //Deletar tabela
    return knex.schema.dropTable('point');
    
}


/* ------------------------------------------------------------------------------------ */