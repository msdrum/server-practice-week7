import express from "express";
import * as dotenv from "dotenv";
import connect from "./config/db.config.js";

//habilitar o servidor a ter variáveis de ambiente
dotenv.config();

//configurar o servidor para aceitar enviar e receber arquivos em JSON
app.use(express.json());

//conectando com o banco de dados
connect();

//rotas
app.use("/user", userRoute);

// o servidor subindo pro ar.
app.listen(process.env.PORT, () => {
  console.log(
    `App up and running on port http://localhost:${process.env.PORT}`
  );
});
