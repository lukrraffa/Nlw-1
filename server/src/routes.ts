//Esse arquivo é só para as rotas da aplicação

/* ========================================================= */


import express from 'express';

//express.Router() é uma função que desaclopa as rotas do arquivo principal
const routes =  express.Router();

/* ====================== */

routes.get('/',(request, response) => {
    console.log("Olá mundo!");
    return response.json({message: 'Hello World'});
    
});



/* ====================== */

// Exporta as rotas dessa página
export default routes;