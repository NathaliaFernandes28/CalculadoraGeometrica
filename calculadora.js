function areadotriangulo() {
  const base = prompt("Informe a base do Triângulo:");
  const altura = prompt("Informe a altura do Triângulo:");
  return (base * altura) / 2;
}

function areadoretangulo() {
  const base = prompt("Informe a base do Retângulo:");
  const altura = prompt("Informe a altura do Retângulo:");
  return base * altura;
}

function areadoquadrado() {
  const lado = prompt("Informe o lado do quadrado:");
  return lado * lado;
}

function areadotrapezio() {
  const baseMaior = prompt("Informe a base maior do Trapézio:");
  const baseMenor = prompt("Informe a base menor do Trapézio:");
  const altura = prompt("Informe a altura do Trapézio:");
  return ((baseMaior + baseMenor) * altura) / 2;
}

function areadocirculo() {
  const raio = prompt("Informe o raio do circulo:");
  return 3.14 * raio * raio;
}

function exibirMenu() {
  return prompt(
    "Escolha uma opção de calculo:\n\n" +
      "1. Área do Triângulo" +
      "\n2. Área do Retângulo" +
      "\n3. Área do Quadrado" +
      "\n4. Área do Trapézio" +
      "\n5. Área do Círculo" +
      "\n6. Sair"
  );
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = areadotriangulo();
        break;
      case "2":
        resultado = areadoretangulo();
        break;
      case "3":
        resultado = areadoquadrado();
        break;
      case "4":
        resultado = areadotrapezio();
        break;
      case "5":
        resultado = areadocirculo();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção Inválida!");
    }
    if (resultado) {
      alert(" Resultado: " + resultado);
    }
  } while (opcao !== "6");
}

executar();
