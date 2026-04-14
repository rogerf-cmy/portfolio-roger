const projetos = [
  { titulo: "Site Pessoal", descricao: "Meu primeiro site em HTML e CSS.", link: "https://github.com/seuusuario/site-pessoal" },
  { titulo: "App de Tarefas", descricao: "Aplicativo simples em JavaScript para organizar tarefas.", link: "https://github.com/seuusuario/app-tarefas" },
  { titulo: "Portfólio", descricao: "Este portfólio publicado no GitHub Pages.", link: "https://seuusuario.github.io/portfolio" }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const div = document.createElement("div");
  div.classList.add("projeto");
  div.innerHTML = `
    <h3>${projeto.titulo}</h3>
    <p>${projeto.descricao}</p>
    <a href="${projeto.link}" target="_blank">Ver projeto</a>
  `;
  lista.appendChild(div);
});
