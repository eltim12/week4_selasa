function cariMedian(arr) {
  // you can only write your code here!
  var ganjil = Math.round((arr.length + 1) / 2);

  if (arr.length % 2 === 1) {
    return arr[ganjil - 1];
  } else {
      var genap1 = arr.length / 2;
      var genap2 = arr.length / 2 + 1;

      var totalGenap = (arr[genap1 - 1] + arr[genap2 -1]) / 2;

      return totalGenap;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5