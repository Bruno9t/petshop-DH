const http = require("http");
const url = require("url");

const petshop = require("./petshop.js");

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain; charset=UTF-8" });
    res.write("Bem vindos ao Pet shop");

    let urlCompleta = url.parse(req.url, true);
    let queryString = urlCompleta.query;
    let rota = urlCompleta.pathname;

    console.log(queryString);

    switch (rota) {
      case "/pets":
        const pets = petshop.listarPets();

        if (pets.length > 0) {
          res.write(pets);
        } else res.write("\nNenhum pet cadastrado :(");
        break;

      case "/pets/add":
        if (petshop.adicionarPet(queryString.nome)) {
          res.write(`\n${queryString.nome} foi adicionado com sucesso!`);
        } else {
          res.write("\nOps! algo deu errado!");
        }
        break;

      case "/pets/buscar":
        if (petshop.buscarPet(queryString.nome).length > 1) {
          res.write(
            `\n${petshop.buscarPet(queryString.nome).length} pets com nome ${
              queryString.nome
            } foram encontrados`
          );
        } else if (petshop.buscarPet(queryString.nome).length === 0) {
          res.write(
            `\nNenhum pet com nome ${queryString.nome} foi encontrado!`
          );
        } else
          res.write(`\nUm pet com nome ${queryString.nome} foi encontrado!`);
        break;

      default:
        res.write("\n** Pet Shop DH **");
    }

    res.end();
  })
  .listen(3000, "localhost", () => {
    console.log("Servidor foi inciado!");
  });
