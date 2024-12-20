function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = 1;

  let menor = Math.min(a, b);
  let mayor = Math.max(a, b);

  if(menor <= 0 && mayor >= 0) {
    return 0;
  }

  for(i = menor ; i <= mayor ; i++) {
    producto *= i;
  }
return producto;
}

module.exports = productoEntreNúmeros;