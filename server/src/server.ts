import express, { response } from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

//GET: Buscar ou listar um informação
//POST: Criar alguma nova informação
//PUT: atualizar uma informação existente
//DELETE: deletar uma informação existente

//Corpo (Request body): Dados para criação ou atualização de um registro
//Route Params: Identificar qual recuso eu quero atualizar ou deletar
//Query Params: Paginação, filtros, ordenação