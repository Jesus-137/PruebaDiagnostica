import express from 'express';
import { compradorRouter } from './comprador/infrastructure/CompradorRouter';
import { Signale } from 'signale';
import { vendedorRouter } from './vendedor/infrastructure/VendedorRouter';
import { floresRouter } from './Flores/infrastructure/FloresRouter';
import { catalogoRouter } from './Catalogo/insfrastructure/CatalogoRouter';
import { pedidosRouter } from './Pedidos/insfrastructure/PedidosRouter';
require('dotenv').config();
const bucketName = process.env.AWS_S3_BUCKET_NAME;
console.log(`Bucket Name: ${bucketName}`);  // Debe imprimir el nombre de tu bucket

const app = express();
const signale = new Signale();

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use('/comprador', compradorRouter);
app.use('/vendedor', vendedorRouter);
app.use('/flores', floresRouter);
app.use('/catalogo', catalogoRouter);
app.use('/pedidos', pedidosRouter);


const port = 3000;
app.listen(port, () => {
  signale.success(`Server online on port ${port}`);
});
