require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const deliveryRoutes = require('./routes/delivery.routes');
const settingsRoutes = require('./routes/settings.routes');

const app = express();
app.use(cors());
app.use(express.json());

// Conexão MongoDB com possíveis credenciais
const mongoUri = process.env.MONGO_URI;
const options = {};
if (process.env.MONGO_USER && process.env.MONGO_PASS) {
  options.user = process.env.MONGO_USER;
  options.pass = process.env.MONGO_PASS;
}

mongoose.connect(mongoUri, options)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro ao conectar MongoDB:', err));

app.use('/deliveries', deliveryRoutes);
app.use('/settings', settingsRoutes);

// Tratador genérico de erros
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));