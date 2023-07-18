function wordCountEngine(document) {
  let str = document.toLowerCase();
  //const regex = '/^[a-z ]*$/';
  //str.match(regex);

  const newStringArray = str.split(" ");

  //cleaning the words O(n) time, O(n) space for words array;
  const words = [];
  for (const word of newStringArray) {
    let punctuationFree = "";
    for (const c of word) {
      if (c >= "a" && c <= "z") {
        punctuationFree += c;
      }
    }
    if (punctuationFree) {
      words.push(punctuationFree);
    }
  }

  // counting the words O(n) time, O(n) space for map;
  const map = new Map();
  for (word of words) {
    if (map.get(word)) {
      map.set(word, map.get(word) + 1);
    } else {
      map.set(word, 1);
    }
  }

  // bucket sorting the words, O(n) time, O(n) space for sorted array;
  const sorted = [];
  for (let [key, value] of map.entries()) {
    sorted[value] = key && sorted[value] ? sorted[value].concat(key) : [key];
  }

  // format result into expected format O(n) time, O(n) space for result array;
  const result = [];
  for (let i = sorted.length - 1; i >= 0; i--) {
    if (sorted[i]) {
      let start = 0;
      while (start < sorted[i].length) {
        result.push([sorted[i][start], i.toString()]);
        start++;
      }
    }
  }
  return result;
}

// console.log(
//   wordCountEngine(
//     "Practice makes perfect, you'll get perfecT by practice. just practice! just just just!!"
//   )
// );

// console.log(wordCountEngine("To be, or not to be, that is the question:"));

console.log(
  wordCountEngine(
    "Every book is a quotation; and every house is a quotation out of all forests, and mines, and stone quarries; and every man is a quotation from all his ancestors. "
  )
);

// console.log(
//   wordCountEngine(
//     "I have failed over and over and over again in my life and that is why I succeed."
//   )
// );

// console.log(
//   wordCountEngine(
//     "Look If you had One shot, Or one opportunity, To seize everything you ever wanted, In one moment, Would you capture it, Or just let it slip?"
//   )
// );

// console.log(
//   wordCountEngine(
//     "Cause I'm Slim Shady, yes I'm the real Shady, All you other Slim Shadys are just imitating So won't the real Slim Shady, please stand up, Please stand up, Please stand up"
//   )
// );
