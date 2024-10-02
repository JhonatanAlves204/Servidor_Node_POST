const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/",(request, response) => {
    response.send({
        msg:"Ola Mundo!"
    });
});

//Metodo POST
app.post('/api/data', (request, response) => {
    //Aqui captura os dados do corpo da requisição
    const data = req.body;
    // Aqui voce pode fazer o que queira com a informação

    //Aqui retorna uma resposta de volta ao cliente
    res.json({
        message: 'Dados recebidos com sucesso!',
        data: data
    });
});
app.listen(port, () => {
    console.log(`servidor executando na porta: ${port}`);
})