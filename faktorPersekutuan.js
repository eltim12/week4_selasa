function fpb(angka1, angka2) {
    // you can only write your code here!
    var tampungAngka1 = [];
    var tampungAngka2 = []; 

     for (var i = 1; i <= angka1; i++) {
        if (angka1 % i === 0)
         tampungAngka1.push(i);
    }
     for (var j = 1; j <= angka2; j++) {
         if (angka2 % j === 0)
         tampungAngka2.push(j);
     }

     var tampung = [];
     for (var m = 0; m < tampungAngka2.length; m++) {
        for (var x = 0; x < tampungAngka1.length; x++) {
            if (tampungAngka1[x] === tampungAngka2[m]) {
                    tampung.push(tampungAngka1[x]);
            }
        }
     }
     return tampung[tampung.length - 1];
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1
