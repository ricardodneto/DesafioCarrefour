// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

let line = gets().split(" ");
const a = parseInt(line[0]);
const b = parseInt(line[1]);

q = parseInt(a / b);

// a = -7 e o b = -3 e q =  2.3
// r = 13,9
r = a - b * q;

if (r < 0) {
  r = Math.abs(a % b) + 1;
  
  q = parseInt(a / b) + 1;    //escreva sua lógica aqui

}

print(q + " " + r);