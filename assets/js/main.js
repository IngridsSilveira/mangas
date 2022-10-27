const exampleModal = document.getElementById("exampleModal");
exampleModal.addEventListener("show.bs.modal", (event) => {
  const button = event.relatedTarget;

    const modalTitle = exampleModal.querySelector(".titulo");

    const modalDescricao = exampleModal.querySelector(".descricao");

    const modalAutor = exampleModal.querySelector(".autor");

    const modalgenero = exampleModal.querySelector(".genero");

    const displayedImage = document.querySelector(".imagens");

    const newImage = document.querySelector(".imagem_selecionada");
    newImage.setAttribute("class", "imagem_selecionada");
    displayedImage.appendChild(newImage);

    const links = document.querySelector(".ler");

    const imagens = [
      // `https://raw.githubusercontent.com/IngridsSilveira/mangas/main/assets/imagens/spyFamily/SPY%C3%97FAMILY-capa.jpg`,
      // `https://raw.githubusercontent.com/IngridsSilveira/mangas/main/assets/imagens/vagabond/Vagabond-capa.jpg`,
      // `https://raw.githubusercontent.com/IngridsSilveira/mangas/main/assets/imagens/berserk/berserk-capa.jpg`
      `assets/imagens/spyFamily/spy-capa.jpg`,
      `assets/imagens/vagabond/Vagabond-capa.jpg`,
      `assets/imagens/berserk/berserk-capa.jpg`,
    ];
  if (button.id == "spy") {
    modalTitle.innerHTML = `SPY X FAMILY`;
    modalAutor.innerHTML = "Tatsuya Endo";
    modalgenero.innerHTML = "Ação, Comédia e Romance";
    modalDescricao.innerHTML = `O mestre espião de codinome “Twilight” passou seus dias em missões secretas, tudo pelo sonho de um mundo melhor. Mas um dia, ele recebe uma nova ordem particularmente difícil da central de comando. Para sua missão, ele deve formar uma família temporária e começar uma nova vida?!`;

    newImage.setAttribute("src", `${imagens[0]}`);

    links.setAttribute(
      "href",
      "https://mangayabu.top/ler/spy-x-family-capitulo-01-my79707/"
    );
  } else if (button.id == "vagabond") {
    console.log(button.id);

    modalTitle.innerHTML = `Vagabond`;
    modalAutor.innerHTML = "Takehiko Inoue";
    modalgenero.innerHTML = "Seinen";
    modalDescricao.innerHTML = `O lendário espadachim Miyamoto Musashi, conhecido no Japão como sendo o maior samurai de todos os tempos. O mangá é um retrato fictício da vida de Musashi, um ronin (samurai que não serve a nenhum mestre) que viajava pelo Japão na procura de grandes adversários para desafiar e, assim, aprimorar-se.`;

    newImage.setAttribute("src", `${imagens[1]}`);

    links.setAttribute(
      "href",
      "https://mangayabu.top/ler/vagabond-capitulo-01-my1529/"
    );
  } else if (button.id == "berserk") {
    console.log(button.id);

    modalTitle.innerHTML = "Berserk";
    modalAutor.innerHTML = "Kentarou Miura";
    modalgenero.innerHTML = "Fantasia, Espada e feitiçaria";
    modalDescricao.innerHTML = `Guts, conhecido como o Espadachim Negro, busca refúgio das forças demoníacas atraídas por ele e sua mulher por causa de uma marca demoníaca em seus pescoços, e também vingança contra o homem que o marcou como um sacrifício profano.`;

    newImage.setAttribute("src", `${imagens[2]}`);
    links.setAttribute(
      "href",
      "https://mangayabu.top/ler/berserk-capitulo-00-01-my22981/"
    );
  }
});
