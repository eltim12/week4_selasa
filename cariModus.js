function cariModus(arr) {
    // you can only write your code here!
    var unik = [];
    var frekuensi = [];

    for (var i = 0; i < arr.length; i++) {
        var simpan = unik.indexOf(arr[i]);

    if (simpan === -1) {
        unik.push(arr[i]);
        frekuensi.push(1);
      } else {
          frekuensi[simpan]++;
      }
    }

    var isFrekuensi = 1;
    for (var j = 0; j < frekuensi.length; j++) {
        if (frekuensi[j] > isFrekuensi) {
            isFrekuensi = frekuensi[j];
      }
    }
    var isSimpan = frekuensi.indexOf(isFrekuensi);
    for (var k = 0; k < frekuensi.length; k++) {
        if (frekuensi[k] === 2) {
            return arr[isSimpan];
        } else if (isFrekuensi !==2) {
            return -1;
        }
    }
  }
  
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1

  //condisi
  // 1. lebih dari 1 kali = display modus
  // 2. smua angka muncul sekali = display -1
  // 3. angkanya sama smua = display -1