let pets = [{ nome: "Scoob" }, { nome: "Bolt" }];

const listarPets = () => {
  let conteudo = "";
  for (let pet of pets) {
    conteudo += `
------------------
${pet.nome}
------------------
        `;
  }
  return conteudo;
};

const buscarPet = nomePet => {
  let pet = pets.filter(element => {
    return element.nome === nomePet;
  });
  return pet;
};

const adicionarPet = nomePet => {
  let arrayPets = [];
  for (let pet of pets) {
    arrayPets.push(pet.nome);
  }
  pets.push({
    nome: nomePet
  });

  return `Pet ${nomePet} adicionado!`;
};

module.exports = {
  listarPets,
  buscarPet,
  adicionarPet
};
