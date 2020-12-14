import express from 'express';

//Importando as rotas
// coloco './' porque é um arquivo da minha aplicação.
// Quando vem de dentro do node_modules, como o 'express', aí eu NÃO preciso do './'
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);   



app.listen(3333);