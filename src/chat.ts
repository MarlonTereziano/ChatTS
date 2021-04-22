import express from "express"; // importa a biblioteca express para o nome express

const app = express(); // determina a aplicação com o nome app, recebendo a biblioteca express


//Get busca
//Post Cria
// put Alteração
// del delete
//Patch alteração específica

app.get("/", (request, response) => {
    return response.json({message: "teste um"});
}); // request tudo que tá vindo, response é o que responde

app.post("/", (request, response) => {
    return response.send({message: "Teste rota post"});
});

app.listen(3333, () => console.log("Server OKAY em 3333")); // determina a porta que o app vai usar, o consolog é apenas para msg de erro



