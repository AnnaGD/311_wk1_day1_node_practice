const isEven = num => {
	return num % 2 === 0;
};

const sum = arr => {
	return arr.length === 0 ? 0 : arr[0] + sum(arr.slice(1));
};

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  let newSum = sumOf(arr)
  if(newSum === num) {
    return true
  } else {
    return false
  }
};

module.exports = {
	isEven,
	sum,
	comboSum
};
