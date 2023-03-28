function solution(numbers) {
  // console.log(numbers.length);
  var answer = [];

  numbers.forEach((item, index) => {
    // console.log(index);
    for (let i = index + 1; i < numbers.length; i++) {
      // console.log(i);
      if (numbers[index] < numbers[i]) {
        return (answer[index] = numbers[i]);
      }
    }
    if (index === numbers.length - 1 || answer.length !== index + 1) {
      answer[index] = -1;
    }
  });

  return answer;
}

let ex = [2, 3, 3, 5];
let ex2 = [9, 1, 5, 3, 6, 2];
solution(ex2);
