// function divisible(arr) {
//   let sum = arr.reduce((a, b) => a + b, 0);
//   let product = arr.reduce((a, b) => a * b, 1);
//   console.log(sum);
//   console.log(product);
//   return product % sum === 0;
// }

// divisible([1, 2, 4, 5]);

// function acceptedWords(arr) {
//   console.log(arr);
//   let regex = /\bC\b/;
//   let answer = arr.match(regex);
//   console.log(answer);
// }

// acceptedWords(["Cow", "Horse", "Chicken"]);

// function concat(stuff) {
//   let sample = [...arguments];
//   let final = [];
//   sample.forEach(arg => final.push(arg));

//   console.log(final.join(","));
//   console.log(typeof final);
// }

// concat([1, 2, 3], [4, 5], [6, 7]);

function capitalLetters(str) {
  console.log(str.replace(/^A-Z/g, ""));
}

capitalLetters("ajsdkDDFKdkaJdlLdkLdDSS");
