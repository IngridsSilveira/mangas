const criandoElementos = () => {
  const modalTitle = exampleModal.querySelector(".titulo");

  const modalDescricao = exampleModal.querySelector(".descricao");

  const modalAutor = exampleModal.querySelector(".autor");

  const modalgenero = exampleModal.querySelector(".genero");

  const links = document.querySelector(".ler");

  const displayedImage = document.querySelector(".imagens");
  const newImage = document.querySelector(".imagem_selecionada");
  newImage.setAttribute("class", "imagem_selecionada");
  displayedImage.appendChild(newImage);

  const imagens = [
    `assets/imagens/spyFamily/spy-capa.jpg`,
    `assets/imagens/vagabond/Vagabond-capa.jpg`,
    `assets/imagens/berserk/berserk-capa.jpg`,
  ];

  const titulos = ["SPY X FAMILY", "Vagabond", "Berserk"];
  const autor = ["Tatsuya Endo", "Takehiko Inoue", "Kentarou Miura"];
  const genero = [
    "Ação, Comédia e Romance",
    "Seinen",
    "Fantasia, Espada e feitiçaria",
  ];
  const descricao = [
    "O mestre espião de codinome “Twilight” passou seus dias em missões secretas, tudo pelo sonho de um mundo melhor. Mas um dia, ele recebe uma nova ordem particularmente difícil da central de comando. Para sua missão, ele deve formar uma família temporária e começar uma nova vida?!",
    "O lendário espadachim Miyamoto Musashi, conhecido no Japão como sendo o maior samurai de todos os tempos. O mangá é um retrato fictício da vida de Musashi, um ronin (samurai que não serve a nenhum mestre) que viajava pelo Japão na procura de grandes adversários para desafiar e, assim, aprimorar-se.",
    "Guts, conhecido como o Espadachim Negro, busca refúgio das forças demoníacas atraídas por ele e sua mulher por causa de uma marca demoníaca em seus pescoços, e também vingança contra o homem que o marcou como um sacrifício profano.",
  ];

  const elementos = [...document.querySelectorAll(".content-itens")];

  elementos.map((el) => {
    el.addEventListener("click", (evt) => {
      const alvo = evt.target.id;

      if (alvo == 0) {
        modalTitle.innerHTML = `${titulos[0]}`;
        modalAutor.innerHTML = `${autor[0]}`;
        modalgenero.innerHTML = `${genero[0]}`;
        modalDescricao.innerHTML = `${descricao[0]}`;
        newImage.setAttribute("src", `${imagens[0]}`);
        links.setAttribute("href", "cap-spy.html");
      } else if (alvo == 1) {
        modalTitle.innerHTML = `${titulos[1]}`;
        modalAutor.innerHTML = `${autor[1]}`;
        modalgenero.innerHTML = `${genero[1]}`;
        modalDescricao.innerHTML = `${descricao[1]}`;

        newImage.setAttribute("src", `${imagens[1]}`);

        links.setAttribute("href", "cap-vagabond.html");
      } else if (alvo == 2) {
        modalTitle.innerHTML = `${titulos[2]}`;
        modalAutor.innerHTML = `${autor[2]}`;
        modalgenero.innerHTML = `${genero[2]}`;
        modalDescricao.innerHTML = `${descricao[2]}`;

        newImage.setAttribute("src", `${imagens[2]}`);
        links.setAttribute("href", "cap-berserk.html");
      }
    });
  });
};
const exampleModal = document.getElementById("exampleModal");
exampleModal.addEventListener("show.bs.modal", (event) => {
  const button = event.relatedTarget;
  criandoElementos();
});
