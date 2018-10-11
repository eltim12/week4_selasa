function angkaPrima(angka) {
  var simpen = [];
  for (var i = 1; i <= angka; i++) {
    if (angka % [i + 1] === 0) {
      simpen.push(i + 1);
    }
  }
    return parseInt(simpen) === parseInt(angka);
} 

console.log(angkaPrima(7));