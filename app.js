// app.js
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Conecta ao banco de dados MongoDB
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conexão ao banco de dados estabelecida"))
  .catch((err) => console.error("Erro ao conectar ao banco de dados:", err));

// Define o esquema do modelo
const Schema = mongoose.Schema;
const exemploSchema = new Schema({
  campo: String,
});

// Cria o modelo
const Exemplo = mongoose.model("Exemplo", exemploSchema);

app.get("/", (req, res) => {
  res.send("Olá, mundo!");
});

// Rota para salvar um novo registro
app.get("/salvar", async (req, res) => {
  const novoExemplo = new Exemplo({
    mensagem: "Este é um exemplo de valor do campor mensagem",
  });
  await novoExemplo.save();
  res.send("Registro salvo com sucesso!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em <http://localhost>:${PORT}`);
});
