const estudantes = [
  { name: "Janaina", nota: 8 },
  { name: "Jão", nota: 7 },
  { name: "Carol", nota: 4 },
  { name: "Mickel Jegue", nota: 9 },
  { name: "Ivanilde", nota: 5 },
];

function somenteAprovados(estudantes) {
  const estudantesAprovados = estudantes.filter(
    (estudantes) => estudantes.nota >= 6
  );
  return estudantesAprovados;
}

console.log(somenteAprovados(estudantes));
