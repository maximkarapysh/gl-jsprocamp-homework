/*
  Напишите функцию, которая параметрами принимает 2 числа и возвращает их сумму
*/
export function sum(a, b) {
	return a + b;
}

/*
  Напишите функцию, которая возвращает сумму всех чисел, что передаются параметрами
*/
export function sumAll(...rest) {
	let sum = 0;
	rest.forEach(item => { sum += item });
	return sum;
}

/*
  Напишите функцию, которая возвращает число x в степень n
*/
export function pow(x, n) {
	return Math.pow(x,n);
}

/*
  Напишите функцию, которая возвращает рандомное целое число от from до to
*/
export function random(from, to) {
	return Math.floor(Math.random() * (to - from + 1) + from);
}

export default {
	sum,
	sumAll,
	pow,
	random,
};
