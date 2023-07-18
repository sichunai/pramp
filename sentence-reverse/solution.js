function reverseWords(arr) {
  // loop arr backwards from last character to first
  // find space character, when found, i have found a word,
  // remember where the space character is, and push the found word into output array
  const last = arr.length - 1;
  let output = [];
  let start = 0;
  let end = arr.length - 1;

  for (let i = last; i >= 0; i--) {
    if (arr[i] == " ") {
      start = i + 1;
      while (start <= end) {
        output.push(arr[start]);
        start++;
      }
      output.push(arr[i]);
      end = i - 1;
    } else if (i === 0) {
      start = i;
      while (start <= end) {
        output.push(arr[start]);
        start++;
      }
    }
  }
  return output;
}

function reverseWordsWithoutExtraSpace(arr) {
  let n = arr.length;
  let start = 0;
  reverse(arr, 0, n - 1);
  for (i = 0; i < n; i++) {
    if (arr[i] === " ") {
      reverse(arr, start, i - 1);
      start = i + 1;
    } else if (i === n - 1) {
      reverse(arr, start, n - 1);
    }
  }
  return arr;
}

function reverse(arr, start, end) {
  let temp;
  while (end > start) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

console.log(reverseWords([" ", " "]));
console.log(reverseWords(["a", " ", " ", "b"]));
console.log(reverseWords(["h", "e", "l", "l", "o", " ", "h", "i"]));
// ["i", "h", " ", "o", "l", "l", "e", "h"]
console.log(
  reverseWords([
    "p",
    "e",
    "r",
    "f",
    "e",
    "c",
    "t",
    " ",
    "m",
    "a",
    "k",
    "e",
    "s",
    " ",
    "p",
    "r",
    "a",
    "c",
    "t",
    "i",
    "c",
    "e",
  ])
);
console.log(
  reverseWords([
    "y",
    "o",
    "u",
    " ",
    "w",
    "i",
    "t",
    "h",
    " ",
    "b",
    "e",
    " ",
    "f",
    "o",
    "r",
    "c",
    "e",
    " ",
    "t",
    "h",
    "e",
    " ",
    "m",
    "a",
    "y",
  ])
);
console.log(
  reverseWords([
    "g",
    "r",
    "e",
    "a",
    "t",
    "e",
    "s",
    "t",
    " ",
    "n",
    "a",
    "m",
    "e",
    " ",
    "f",
    "i",
    "r",
    "s",
    "t",
    " ",
    "e",
    "v",
    "e",
    "r",
    " ",
    "n",
    "a",
    "m",
    "e",
    " ",
    "l",
    "a",
    "s",
    "t",
  ])
);
