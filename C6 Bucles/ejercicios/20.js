function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   let sumaBreak = 0;

   for(i = 1 ; i <= n ; i++){
      sumaBreak += i;
      if(sumaBreak > 100){
         break;
      }
   }
   return sumaBreak;
}

module.exports = sumarHastaNConBreak;
