// 1. Crie um array com 5 nomes
let nomes = ['Ana', 'Bruno', 'Carlos', 'Daniela', 'Eduardo'];

// Exiba o terceiro nome (índice 2)
console.log("Terceiro nome:", nomes[2]);

// 2. Adicione um nome ao final
nomes.push('Fernanda');

// Adicione um nome ao início
nomes.unshift('Alberto');

// 3. Remova o último nome
nomes.pop();

// Exiba o array atualizado
console.log("Array de nomes atualizado:", nomes);

// 4. Use map() para dobrar os valores de [2, 4, 6, 8]
const numeros = [2, 4, 6, 8];
const dobrados = numeros.map(numero => numero * 2);
console.log("Números dobrados:", dobrados);

// 5. Use filter() para obter números maiores que 5 em [1, 3, 5, 7, 9]
const numeros2 = [1, 3, 5, 7, 9];
const maioresQue5 = numeros2.filter(numero => numero > 5);
console.log("Números maiores que 5:", maioresQue5);
