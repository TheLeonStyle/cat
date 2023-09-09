const inner = document.querySelector('.inner');
for (let index = 0; index < 60; index++) {
	inner.insertAdjacentHTML('beforeend', `<div class="col col-${index}"></div>`)
}


const cols = document.querySelectorAll('.col');


const getHtmlArray = (count = 1, className = 'orange') => {
	const arr = []

	for (let index = 0; index < count; index++) {
		arr.push(`<div class="pixel ${className}"></div>`)
	}
	return arr.join('')
}

const getPixelToHtml = (index = 0, count = 1, className = 'orange') => {

	return cols[index].insertAdjacentHTML('beforeend', getHtmlArray(count, className))

}

setTimeout(() => {
	getPixelToHtml(0, 7, 'blue')
	getPixelToHtml(0, 9, 'white')
	getPixelToHtml(0, 5, 'gray')
	getPixelToHtml(0, 84, 'blue')
	getPixelToHtml(0, 5, 'green')
}, 250);

setTimeout(() => {
	getPixelToHtml(1, 7, 'blue')
	getPixelToHtml(1, 10, 'white')
	getPixelToHtml(1, 4, 'gray')
	getPixelToHtml(1, 84, 'blue')
	getPixelToHtml(1, 1, 'green')
	getPixelToHtml(1, 1, 'green-dark')
	getPixelToHtml(1, 3, 'green')
}, 500);

setTimeout(() => {
	getPixelToHtml(2, 7, 'blue')
	getPixelToHtml(2, 10, 'white')
	getPixelToHtml(2, 4, 'gray')
	getPixelToHtml(2, 84, 'blue')
	getPixelToHtml(2, 5, 'green')
}, 750);

setTimeout(() => {
	getPixelToHtml(3, 8, 'blue')
	getPixelToHtml(3, 11, 'white')
	getPixelToHtml(3, 2, 'gray')
	getPixelToHtml(3, 83, 'blue')
	getPixelToHtml(3, 3, 'green')
	getPixelToHtml(3, 1, 'green-dark')
	getPixelToHtml(3, 2, 'green')
}, 1000);

setTimeout(() => {
	getPixelToHtml(4, 9, 'blue')
	getPixelToHtml(4, 10, 'white')
	getPixelToHtml(4, 2, 'gray')
	getPixelToHtml(4, 83, 'blue')
	getPixelToHtml(4, 1, 'green')
	getPixelToHtml(4, 1, 'green-white')
	getPixelToHtml(4, 1, 'green')
	getPixelToHtml(4, 1, 'green-dark')
	getPixelToHtml(4, 2, 'green')
}, 1250);

setTimeout(() => {
	getPixelToHtml(5, 11, 'blue')
	getPixelToHtml(5, 8, 'white')
	getPixelToHtml(5, 2, 'gray')
	getPixelToHtml(5, 82, 'blue')
	getPixelToHtml(5, 7, 'green')
}, 1500);

setTimeout(() => {
	getPixelToHtml(6, 12, 'blue')
	getPixelToHtml(6, 7, 'white')
	getPixelToHtml(6, 2, 'gray')
	getPixelToHtml(6, 25, 'blue')
	getPixelToHtml(6, 1, 'gray')
	getPixelToHtml(6, 55, 'blue')
	getPixelToHtml(6, 1, 'green')
	getPixelToHtml(6, 1, 'green-dark')
	getPixelToHtml(6, 6, 'green')
}, 1750);

setTimeout(() => {
	getPixelToHtml(7, 15, 'blue')
	getPixelToHtml(7, 3, 'white')
	getPixelToHtml(7, 3, 'gray')
	getPixelToHtml(7, 25, 'blue')
	getPixelToHtml(7, 1, 'gray')
	getPixelToHtml(7, 54, 'blue')
	getPixelToHtml(7, 9, 'green')
}, 2000);

setTimeout(() => {
	getPixelToHtml(8, 13, 'blue')
	getPixelToHtml(8, 5, 'white')
	getPixelToHtml(8, 3, 'gray')
	getPixelToHtml(8, 24, 'blue')
	getPixelToHtml(8, 2, 'gray')
	getPixelToHtml(8, 53, 'blue')
	getPixelToHtml(8, 4, 'green')
	getPixelToHtml(8, 1, 'green-dark')
	getPixelToHtml(8, 2, 'green')
	getPixelToHtml(8, 1, 'green-white')
	getPixelToHtml(8, 2, 'green')
}, 2250);


setTimeout(() => {
	getPixelToHtml(9, 12, 'blue')
	getPixelToHtml(9, 4, 'white')
	getPixelToHtml(9, 5, 'gray')
	getPixelToHtml(9, 24, 'blue')
	getPixelToHtml(9, 2, 'gray')
	getPixelToHtml(9, 52, 'blue')
	getPixelToHtml(9, 5, 'green')
	getPixelToHtml(9, 1, 'green-dark')
	getPixelToHtml(9, 5, 'green')
}, 2500);


setTimeout(() => {
	getPixelToHtml(10, 11, 'blue')
	getPixelToHtml(10, 5, 'white')
	getPixelToHtml(10, 5, 'gray')
	getPixelToHtml(10, 23, 'blue')
	getPixelToHtml(10, 1, 'white')
	getPixelToHtml(10, 2, 'gray')
	getPixelToHtml(10, 53, 'blue')
	getPixelToHtml(10, 10, 'green')
}, 2750);


setTimeout(() => {
	getPixelToHtml(11, 12, 'blue')
	getPixelToHtml(11, 4, 'white')
	getPixelToHtml(11, 5, 'gray')
	getPixelToHtml(11, 22, 'blue')
	getPixelToHtml(11, 2, 'white')
	getPixelToHtml(11, 2, 'gray')
	getPixelToHtml(11, 52, 'blue')
	getPixelToHtml(11, 3, 'green')
	getPixelToHtml(11, 1, 'green-white')
	getPixelToHtml(11, 3, 'green')
	getPixelToHtml(11, 1, 'green-dark')
	getPixelToHtml(11, 3, 'green')
}, 3000);


setTimeout(() => {
	getPixelToHtml(12, 12, 'blue')
	getPixelToHtml(12, 5, 'white')
	getPixelToHtml(12, 4, 'gray')
	getPixelToHtml(12, 22, 'blue')
	getPixelToHtml(12, 1, 'white')
	getPixelToHtml(12, 3, 'gray')
	getPixelToHtml(12, 53, 'blue')
	getPixelToHtml(12, 10, 'green')
}, 3250);


setTimeout(() => {
	getPixelToHtml(13, 13, 'blue')
	getPixelToHtml(13, 6, 'white')
	getPixelToHtml(13, 2, 'gray')
	getPixelToHtml(13, 20, 'blue')
	getPixelToHtml(13, 3, 'white')
	getPixelToHtml(13, 3, 'gray')
	getPixelToHtml(13, 52, 'blue')
	getPixelToHtml(13, 4, 'green-dark')
	getPixelToHtml(13, 5, 'green')
	getPixelToHtml(13, 1, 'green-white')
	getPixelToHtml(13, 1, 'green')
}, 3500);


setTimeout(() => {
	getPixelToHtml(14, 14, 'blue')
	getPixelToHtml(14, 5, 'white')
	getPixelToHtml(14, 2, 'gray')
	getPixelToHtml(14, 19, 'blue')
	getPixelToHtml(14, 3, 'white')
	getPixelToHtml(14, 4, 'gray')
	getPixelToHtml(14, 53, 'blue')
	getPixelToHtml(14, 10, 'green')
}, 3750);


setTimeout(() => {
	getPixelToHtml(15, 16, 'blue')
	getPixelToHtml(15, 3, 'white')
	getPixelToHtml(15, 2, 'gray')
	getPixelToHtml(15, 19, 'blue')
	getPixelToHtml(15, 5, 'white')
	getPixelToHtml(15, 2, 'gray')
	getPixelToHtml(15, 53, 'blue')
	getPixelToHtml(15, 4, 'green')
	getPixelToHtml(15, 2, 'green-white')
	getPixelToHtml(15, 4, 'green')
}, 4000);


setTimeout(() => {
	getPixelToHtml(16, 16, 'blue')
	getPixelToHtml(16, 3, 'white')
	getPixelToHtml(16, 2, 'gray')
	getPixelToHtml(16, 18, 'blue')
	getPixelToHtml(16, 6, 'white')
	getPixelToHtml(16, 2, 'gray')
	getPixelToHtml(16, 53, 'blue')
	getPixelToHtml(16, 10, 'green')
}, 4250);


setTimeout(() => {
	getPixelToHtml(17, 15, 'blue')
	getPixelToHtml(17, 4, 'white')
	getPixelToHtml(17, 2, 'gray')
	getPixelToHtml(17, 18, 'blue')
	getPixelToHtml(17, 5, 'white')
	getPixelToHtml(17, 3, 'gray')
	getPixelToHtml(17, 52, 'blue')
	getPixelToHtml(17, 3, 'green')
	getPixelToHtml(17, 1, 'green-white')
	getPixelToHtml(17, 7, 'green')
}, 4500);

setTimeout(() => {
	getPixelToHtml(18, 13, 'blue')
	getPixelToHtml(18, 6, 'white')
	getPixelToHtml(18, 2, 'gray')
	getPixelToHtml(18, 17, 'blue')
	getPixelToHtml(18, 6, 'white')
	getPixelToHtml(18, 3, 'gray')
	getPixelToHtml(18, 52, 'blue')
	getPixelToHtml(18, 3, 'green')
	getPixelToHtml(18, 1, 'green-white')
	getPixelToHtml(18, 7, 'green')
}, 4750);


setTimeout(() => {
	getPixelToHtml(19, 13, 'blue')
	getPixelToHtml(19, 4, 'white')
	getPixelToHtml(19, 4, 'gray')
	getPixelToHtml(19, 17, 'blue')
	getPixelToHtml(19, 4, 'white')
	getPixelToHtml(19, 5, 'gray')
	getPixelToHtml(19, 53, 'blue')
	getPixelToHtml(19, 2, 'green-dark')
	getPixelToHtml(19, 8, 'green')
}, 5000);


setTimeout(() => {
	getPixelToHtml(20, 14, 'blue')
	getPixelToHtml(20, 4, 'white')
	getPixelToHtml(20, 3, 'gray')
	getPixelToHtml(20, 16, 'blue')
	getPixelToHtml(20, 4, 'white')
	getPixelToHtml(20, 6, 'gray')
	getPixelToHtml(20, 53, 'blue')
	getPixelToHtml(20, 5, 'green')
	getPixelToHtml(20, 1, 'green-white')
	getPixelToHtml(20, 1, 'green')
	getPixelToHtml(20, 1, 'green-dark')
	getPixelToHtml(20, 2, 'green')
}, 5250);


setTimeout(() => {
	getPixelToHtml(21, 15, 'blue')
	getPixelToHtml(21, 3, 'white')
	getPixelToHtml(21, 3, 'gray')
	getPixelToHtml(21, 16, 'blue')
	getPixelToHtml(21, 4, 'white')
	getPixelToHtml(21, 6, 'gray')
	getPixelToHtml(21, 53, 'blue')
	getPixelToHtml(21, 10, 'green')
}, 5500);


setTimeout(() => {
	getPixelToHtml(22, 16, 'blue')
	getPixelToHtml(22, 3, 'white')
	getPixelToHtml(22, 2, 'gray')
	getPixelToHtml(22, 17, 'blue')
	getPixelToHtml(22, 7, 'white')
	getPixelToHtml(22, 2, 'gray')
	getPixelToHtml(22, 53, 'blue')
	getPixelToHtml(22, 2, 'green')
	getPixelToHtml(22, 1, 'green-dark')
	getPixelToHtml(22, 7, 'green')
}, 5750);


setTimeout(() => {
	getPixelToHtml(23, 16, 'blue')
	getPixelToHtml(23, 3, 'white')
	getPixelToHtml(23, 2, 'gray')
	getPixelToHtml(23, 19, 'blue')
	getPixelToHtml(23, 5, 'white')
	getPixelToHtml(23, 2, 'gray')
	getPixelToHtml(23, 52, 'blue')
	getPixelToHtml(23, 4, 'green')
	getPixelToHtml(23, 3, 'green-dark')
	getPixelToHtml(23, 4, 'green')
}, 6000);


setTimeout(() => {
	getPixelToHtml(24, 16, 'blue')
	getPixelToHtml(24, 5, 'gray')
	getPixelToHtml(24, 18, 'blue')
	getPixelToHtml(24, 6, 'white')
	getPixelToHtml(24, 2, 'gray')
	getPixelToHtml(24, 53, 'blue')
	getPixelToHtml(24, 10, 'green')
}, 6250);


setTimeout(() => {
	getPixelToHtml(25, 17, 'blue')
	getPixelToHtml(25, 4, 'gray')
	getPixelToHtml(25, 17, 'blue')
	getPixelToHtml(25, 5, 'white')
	getPixelToHtml(25, 4, 'gray')
	getPixelToHtml(25, 53, 'blue')
	getPixelToHtml(25, 3, 'green')
	getPixelToHtml(25, 1, 'green-white')
	getPixelToHtml(25, 6, 'green')
}, 6500);


setTimeout(() => {
	getPixelToHtml(26, 18, 'blue')
	getPixelToHtml(26, 3, 'gray')
	getPixelToHtml(26, 17, 'blue')
	getPixelToHtml(26, 4, 'white')
	getPixelToHtml(26, 5, 'gray')
	getPixelToHtml(26, 52, 'blue')
	getPixelToHtml(26, 3, 'green-dark')
	getPixelToHtml(26, 5, 'green')
	getPixelToHtml(26, 1, 'green-white')
	getPixelToHtml(26, 2, 'green')
}, 6750);


setTimeout(() => {
	getPixelToHtml(27, 19, 'blue')
	getPixelToHtml(27, 2, 'gray')
	getPixelToHtml(27, 16, 'blue')
	getPixelToHtml(27, 5, 'white')
	getPixelToHtml(27, 5, 'gray')
	getPixelToHtml(27, 53, 'blue')
	getPixelToHtml(27, 7, 'green')
	getPixelToHtml(27, 1, 'green-dark')
	getPixelToHtml(27, 2, 'green')
}, 7000);

setTimeout(() => {
	getPixelToHtml(28, 19, 'blue')
	getPixelToHtml(28, 2, 'gray')
	getPixelToHtml(28, 15, 'blue')
	getPixelToHtml(28, 5, 'white')
	getPixelToHtml(28, 6, 'gray')
	getPixelToHtml(28, 34, 'blue')
	getPixelToHtml(28, 10, 'orange')
	getPixelToHtml(28, 8, 'blue')
	getPixelToHtml(28, 5, 'green')
	getPixelToHtml(28, 1, 'green-white')
	getPixelToHtml(28, 5, 'green')
}, 7250);


setTimeout(() => {
	getPixelToHtml(29, 35, 'blue')
	getPixelToHtml(29, 5, 'white')
	getPixelToHtml(29, 14, 'orange')
	getPixelToHtml(29, 26, 'blue')
	getPixelToHtml(29, 12, 'orange')
	getPixelToHtml(29, 8, 'blue')
	getPixelToHtml(29, 10, 'green')
}, 7500);


setTimeout(() => {
	getPixelToHtml(30, 17, 'blue')
	getPixelToHtml(30, 7, 'orange')
	getPixelToHtml(30, 10, 'blue')
	getPixelToHtml(30, 3, 'black')
	getPixelToHtml(30, 2, 'white')
	getPixelToHtml(30, 16, 'orange')
	getPixelToHtml(30, 22, 'blue')
	getPixelToHtml(30, 17, 'orange')
	getPixelToHtml(30, 1, 'blue')
	getPixelToHtml(30, 3, 'white')
	getPixelToHtml(30, 1, 'gray')
	getPixelToHtml(30, 9, 'green')
	getPixelToHtml(30, 1, 'green-dark')
	getPixelToHtml(30, 1, 'green')
}, 7750);

setTimeout(() => {
	getPixelToHtml(31, 17, 'blue')
	getPixelToHtml(31, 7, 'orange')
	getPixelToHtml(31, 10, 'blue')
	getPixelToHtml(31, 4, 'black')
	getPixelToHtml(31, 17, 'orange')
	getPixelToHtml(31, 21, 'blue')
	getPixelToHtml(31, 17, 'orange')
	getPixelToHtml(31, 3, 'white')
	getPixelToHtml(31, 3, 'gray')
	getPixelToHtml(31, 11, 'green')
}, 8000);

setTimeout(() => {
	getPixelToHtml(32, 16, 'blue')
	getPixelToHtml(32, 2, 'orange')
	getPixelToHtml(32, 4, 'white')
	getPixelToHtml(32, 12, 'orange')
	getPixelToHtml(32, 4, 'black')
	getPixelToHtml(32, 18, 'orange')
	getPixelToHtml(32, 19, 'blue')
	getPixelToHtml(32, 17, 'orange')
	getPixelToHtml(32, 4, 'white')
	getPixelToHtml(32, 4, 'gray')
	getPixelToHtml(32, 2, 'green')
	getPixelToHtml(32, 2, 'green-dark')
	getPixelToHtml(32, 1, 'green')
	getPixelToHtml(32, 1, 'green-white')
	getPixelToHtml(32, 1, 'green')
	getPixelToHtml(32, 1, 'green-white')
	getPixelToHtml(32, 2, 'green')
}, 8250);

setTimeout(() => {
	getPixelToHtml(33, 15, 'blue')
	getPixelToHtml(33, 2, 'orange')
	getPixelToHtml(33, 6, 'white')
	getPixelToHtml(33, 11, 'orange')
	getPixelToHtml(33, 5, 'black')
	getPixelToHtml(33, 18, 'orange')
	getPixelToHtml(33, 16, 'blue')
	getPixelToHtml(33, 18, 'orange')
	getPixelToHtml(33, 7, 'white')
	getPixelToHtml(33, 2, 'gray')
	getPixelToHtml(33, 5, 'green')
	getPixelToHtml(33, 1, 'green-white')
	getPixelToHtml(33, 4, 'green')
}, 8500);

setTimeout(() => {
	getPixelToHtml(34, 13, 'blue')
	getPixelToHtml(34, 3, 'orange')
	getPixelToHtml(34, 9, 'white')
	getPixelToHtml(34, 7, 'gray')
	getPixelToHtml(34, 2, 'orange')
	getPixelToHtml(34, 7, 'black')
	getPixelToHtml(34, 18, 'orange')
	getPixelToHtml(34, 6, 'blue')
	getPixelToHtml(34, 8, 'orange-dark')
	getPixelToHtml(34, 18, 'orange')
	getPixelToHtml(34, 7, 'white')
	getPixelToHtml(34, 1, 'gray')
	getPixelToHtml(34, 4, 'green')
	getPixelToHtml(34, 6, 'green')
	getPixelToHtml(34, 1, 'green-dark')
}, 8750);

setTimeout(() => {
	getPixelToHtml(35, 12, 'blue')
	getPixelToHtml(35, 2, 'orange')
	getPixelToHtml(35, 9, 'white')
	getPixelToHtml(35, 9, 'gray')
	getPixelToHtml(35, 2, 'orange')
	getPixelToHtml(35, 2, 'black')
	getPixelToHtml(35, 2, 'white')
	getPixelToHtml(35, 5, 'black')
	getPixelToHtml(35, 16, 'orange')
	getPixelToHtml(35, 6, 'blue')
	getPixelToHtml(35, 14, 'orange-dark')
	getPixelToHtml(35, 12, 'orange')
	getPixelToHtml(35, 5, 'white')
	getPixelToHtml(35, 4, 'gray')
	getPixelToHtml(35, 1, 'green')
	getPixelToHtml(35, 1, 'green-dark')
	getPixelToHtml(35, 8, 'green')
}, 9000);

setTimeout(() => {
	getPixelToHtml(36, 12, 'blue')
	getPixelToHtml(36, 3, 'orange')
	getPixelToHtml(36, 11, 'white')
	getPixelToHtml(36, 5, 'gray')
	getPixelToHtml(36, 3, 'orange')
	getPixelToHtml(36, 2, 'black')
	getPixelToHtml(36, 2, 'white')
	getPixelToHtml(36, 6, 'black')
	getPixelToHtml(36, 16, 'orange')
	getPixelToHtml(36, 2, 'blue')
	getPixelToHtml(36, 10, 'orange')
	getPixelToHtml(36, 7, 'orange-dark')
	getPixelToHtml(36, 12, 'orange')
	getPixelToHtml(36, 5, 'white')
	getPixelToHtml(36, 4, 'gray')
	getPixelToHtml(36, 3, 'green')
	getPixelToHtml(36, 1, 'green-dark')
	getPixelToHtml(36, 2, 'green')
	getPixelToHtml(36, 1, 'green-white')
	getPixelToHtml(36, 3, 'green')
}, 9250);

setTimeout(() => {
	getPixelToHtml(37, 13, 'blue')
	getPixelToHtml(37, 2, 'orange')
	getPixelToHtml(37, 6, 'white')
	getPixelToHtml(37, 8, 'gray')
	getPixelToHtml(37, 5, 'orange')
	getPixelToHtml(37, 4, 'black')
	getPixelToHtml(37, 2, 'white')
	getPixelToHtml(37, 5, 'black')
	getPixelToHtml(37, 15, 'orange')
	getPixelToHtml(37, 2, 'blue')
	getPixelToHtml(37, 4, 'orange')
	getPixelToHtml(37, 1, 'red')
	getPixelToHtml(37, 11, 'orange')
	getPixelToHtml(37, 6, 'orange-dark')
	getPixelToHtml(37, 7, 'orange')
	getPixelToHtml(37, 7, 'white')
	getPixelToHtml(37, 1, 'gray')
	getPixelToHtml(37, 5, 'green')
	getPixelToHtml(37, 1, 'green-dark')
	getPixelToHtml(37, 5, 'green')
}, 9500);

setTimeout(() => {
	getPixelToHtml(38, 14, 'blue')
	getPixelToHtml(38, 3, 'orange')
	getPixelToHtml(38, 4, 'white')
	getPixelToHtml(38, 8, 'gray')
	getPixelToHtml(38, 5, 'orange')
	getPixelToHtml(38, 4, 'black')
	getPixelToHtml(38, 2, 'white')
	getPixelToHtml(38, 5, 'black')
	getPixelToHtml(38, 15, 'orange')
	getPixelToHtml(38, 2, 'orange-dark')
	getPixelToHtml(38, 3, 'orange')
	getPixelToHtml(38, 3, 'red')
	getPixelToHtml(38, 10, 'orange')
	getPixelToHtml(38, 6, 'orange-dark')
	getPixelToHtml(38, 7, 'orange')
	getPixelToHtml(38, 7, 'white')
	getPixelToHtml(38, 2, 'gray')
	getPixelToHtml(38, 10, 'green')
}, 9750);

setTimeout(() => {
	getPixelToHtml(39, 14, 'blue')
	getPixelToHtml(39, 3, 'orange')
	getPixelToHtml(39, 7, 'white')
	getPixelToHtml(39, 4, 'gray')
	getPixelToHtml(39, 6, 'orange')
	getPixelToHtml(39, 2, 'black')
	getPixelToHtml(39, 2, 'white')
	getPixelToHtml(39, 2, 'black')
	getPixelToHtml(39, 2, 'white')
	getPixelToHtml(39, 3, 'black')
	getPixelToHtml(39, 16, 'orange')
	getPixelToHtml(39, 2, 'orange-dark')
	getPixelToHtml(39, 1, 'orange')
	getPixelToHtml(39, 2, 'white')
	getPixelToHtml(39, 1, 'red')
	getPixelToHtml(39, 16, 'orange')
	getPixelToHtml(39, 6, 'orange-dark')
	getPixelToHtml(39, 2, 'orange')
	getPixelToHtml(39, 5, 'white')
	getPixelToHtml(39, 3, 'gray')
	getPixelToHtml(39, 11, 'green')
}, 10000);

setTimeout(() => {
	getPixelToHtml(40, 14, 'blue')
	getPixelToHtml(40, 4, 'orange')
	getPixelToHtml(40, 6, 'white')
	getPixelToHtml(40, 3, 'gray')
	getPixelToHtml(40, 7, 'orange')
	getPixelToHtml(40, 2, 'black')
	getPixelToHtml(40, 2, 'white')
	getPixelToHtml(40, 2, 'black')
	getPixelToHtml(40, 2, 'white')
	getPixelToHtml(40, 3, 'black')
	getPixelToHtml(40, 16, 'orange')
	getPixelToHtml(40, 2, 'orange-dark')
	getPixelToHtml(40, 3, 'white')
	getPixelToHtml(40, 17, 'orange')
	getPixelToHtml(40, 10, 'orange-dark')
	getPixelToHtml(40, 3, 'white')
	getPixelToHtml(40, 4, 'gray')
	getPixelToHtml(40, 10, 'green')
}, 10250);

setTimeout(() => {
	getPixelToHtml(41, 15, 'blue')
	getPixelToHtml(41, 4, 'orange')
	getPixelToHtml(41, 3, 'white')
	getPixelToHtml(41, 4, 'gray')
	getPixelToHtml(41, 8, 'orange')
	getPixelToHtml(41, 4, 'black')
	getPixelToHtml(41, 2, 'white')
	getPixelToHtml(41, 5, 'black')
	getPixelToHtml(41, 16, 'orange')
	getPixelToHtml(41, 1, 'orange-dark')
	getPixelToHtml(41, 3, 'white')
	getPixelToHtml(41, 3, 'orange')
	getPixelToHtml(41, 11, 'orange-dark')
	getPixelToHtml(41, 10, 'orange')
	getPixelToHtml(41, 4, 'orange-dark')
	getPixelToHtml(41, 5, 'white')
	getPixelToHtml(41, 2, 'gray')
	getPixelToHtml(41, 1, 'green')
	getPixelToHtml(41, 3, 'green-dark')
	getPixelToHtml(41, 6, 'green')
}, 10500);

setTimeout(() => {
	getPixelToHtml(42, 15, 'blue')
	getPixelToHtml(42, 5, 'orange')
	getPixelToHtml(42, 2, 'white')
	getPixelToHtml(42, 4, 'gray')
	getPixelToHtml(42, 8, 'orange')
	getPixelToHtml(42, 4, 'black')
	getPixelToHtml(42, 2, 'white')
	getPixelToHtml(42, 5, 'black')
	getPixelToHtml(42, 16, 'orange')
	getPixelToHtml(42, 3, 'white')
	getPixelToHtml(42, 1, 'orange-dark')
	getPixelToHtml(42, 3, 'orange')
	getPixelToHtml(42, 11, 'orange-dark')
	getPixelToHtml(42, 16, 'orange')
	getPixelToHtml(42, 3, 'white')
	getPixelToHtml(42, 2, 'gray')
	getPixelToHtml(42, 5, 'green')
	getPixelToHtml(42, 1, 'green-white')
	getPixelToHtml(42, 4, 'green')
}, 10750);

setTimeout(() => {
	getPixelToHtml(43, 15, 'blue')
	getPixelToHtml(43, 5, 'orange')
	getPixelToHtml(43, 4, 'gray')
	getPixelToHtml(43, 10, 'orange')
	getPixelToHtml(43, 6, 'black')
	getPixelToHtml(43, 2, 'white')
	getPixelToHtml(43, 3, 'black')
	getPixelToHtml(43, 15, 'orange')
	getPixelToHtml(43, 3, 'white')
	getPixelToHtml(43, 2, 'orange-dark')
	getPixelToHtml(43, 14, 'orange')
	getPixelToHtml(43, 5, 'orange-dark')
	getPixelToHtml(43, 16, 'orange')
	getPixelToHtml(43, 10, 'green')
}, 11000);

setTimeout(() => {
	getPixelToHtml(44, 15, 'blue')
	getPixelToHtml(44, 7, 'orange')
	getPixelToHtml(44, 2, 'gray')
	getPixelToHtml(44, 10, 'orange')
	getPixelToHtml(44, 6, 'black')
	getPixelToHtml(44, 2, 'white')
	getPixelToHtml(44, 3, 'black')
	getPixelToHtml(44, 14, 'orange')
	getPixelToHtml(44, 3, 'white')
	getPixelToHtml(44, 1, 'orange')
	getPixelToHtml(44, 2, 'orange-dark')
	getPixelToHtml(44, 14, 'orange')
	getPixelToHtml(44, 5, 'orange-dark')
	getPixelToHtml(44, 11, 'orange')
	getPixelToHtml(44, 3, 'white')
	getPixelToHtml(44, 1, 'gray')
	getPixelToHtml(44, 2, 'green')
	getPixelToHtml(44, 1, 'green-white')
	getPixelToHtml(44, 8, 'green')
}, 11250);

setTimeout(() => {
	getPixelToHtml(45, 17, 'blue')
	getPixelToHtml(45, 5, 'orange')
	getPixelToHtml(45, 2, 'gray')
	getPixelToHtml(45, 10, 'orange')
	getPixelToHtml(45, 11, 'black')
	getPixelToHtml(45, 3, 'orange')
	getPixelToHtml(45, 3, 'white')
	getPixelToHtml(45, 2, 'orange-dark')
	getPixelToHtml(45, 5, 'orange')
	getPixelToHtml(45, 2, 'yellow')
	getPixelToHtml(45, 1, 'white')
	getPixelToHtml(45, 2, 'orange')
	getPixelToHtml(45, 2, 'yellow-dark')
	getPixelToHtml(45, 19, 'orange')
	getPixelToHtml(45, 5, 'orange-dark')
	getPixelToHtml(45, 4, 'orange')
	getPixelToHtml(45, 3, 'white')
	getPixelToHtml(45, 4, 'gray')
	getPixelToHtml(45, 3, 'green')
	getPixelToHtml(45, 4, 'green-white')
	getPixelToHtml(45, 3, 'green')
}, 11500);

setTimeout(() => {
	getPixelToHtml(46, 17, 'blue')
	getPixelToHtml(46, 17, 'orange')
	getPixelToHtml(46, 11, 'black')
	getPixelToHtml(46, 2, 'orange')
	getPixelToHtml(46, 5, 'white')
	getPixelToHtml(46, 2, 'orange-dark')
	getPixelToHtml(46, 3, 'orange')
	getPixelToHtml(46, 3, 'yellow')
	getPixelToHtml(46, 3, 'orange')
	getPixelToHtml(46, 1, 'yellow-dark')
	getPixelToHtml(46, 1, 'orange-dark')
	getPixelToHtml(46, 1, 'yellow')
	getPixelToHtml(46, 18, 'orange')
	getPixelToHtml(46, 5, 'orange-dark')
	getPixelToHtml(46, 2, 'orange')
	getPixelToHtml(46, 5, 'white')
	getPixelToHtml(46, 3, 'gray')
	getPixelToHtml(46, 6, 'green')
	getPixelToHtml(46, 1, 'green-dark')
	getPixelToHtml(46, 4, 'green')
}, 11750);

setTimeout(() => {
	getPixelToHtml(47, 17, 'blue')
	getPixelToHtml(47, 17, 'orange')
	getPixelToHtml(47, 11, 'black')
	getPixelToHtml(47, 1, 'orange')
	getPixelToHtml(47, 7, 'white')
	getPixelToHtml(47, 2, 'orange-dark')
	getPixelToHtml(47, 1, 'orange')
	getPixelToHtml(47, 3, 'yellow')
	getPixelToHtml(47, 4, 'orange')
	getPixelToHtml(47, 1, 'orange-dark')
	getPixelToHtml(47, 1, 'yellow-dark')
	getPixelToHtml(47, 1, 'yellow')
	getPixelToHtml(47, 23, 'orange')
	getPixelToHtml(47, 2, 'orange-dark')
	getPixelToHtml(47, 7, 'white')
	getPixelToHtml(47, 2, 'gray')
	getPixelToHtml(47, 1, 'green')
	getPixelToHtml(47, 1, 'green-dark')
	getPixelToHtml(47, 3, 'green')
	getPixelToHtml(47, 1, 'green-dark')
	getPixelToHtml(47, 4, 'green')
}, 12000);

setTimeout(() => {
	getPixelToHtml(48, 18, 'blue')
	getPixelToHtml(48, 16, 'orange')
	getPixelToHtml(48, 11, 'black')
	getPixelToHtml(48, 1, 'orange')
	getPixelToHtml(48, 4, 'white')
	getPixelToHtml(48, 2, 'gray')
	getPixelToHtml(48, 2, 'white')
	getPixelToHtml(48, 1, 'orange-dark')
	getPixelToHtml(48, 3, 'yellow')
	getPixelToHtml(48, 5, 'orange')
	getPixelToHtml(48, 2, 'orange-dark')
	getPixelToHtml(48, 2, 'yellow')
	getPixelToHtml(48, 24, 'orange')
	getPixelToHtml(48, 7, 'white')
	getPixelToHtml(48, 2, 'gray')
	getPixelToHtml(48, 10, 'green')
}, 12250);

setTimeout(() => {
	getPixelToHtml(49, 18, 'blue')
	getPixelToHtml(49, 16, 'orange')
	getPixelToHtml(49, 11, 'black')
	getPixelToHtml(49, 1, 'orange')
	getPixelToHtml(49, 4, 'white')
	getPixelToHtml(49, 2, 'gray')
	getPixelToHtml(49, 2, 'white')
	getPixelToHtml(49, 2, 'orange-dark')
	getPixelToHtml(49, 1, 'yellow')
	getPixelToHtml(49, 6, 'orange')
	getPixelToHtml(49, 2, 'gray-dark')
	getPixelToHtml(49, 1, 'yellow')
	getPixelToHtml(49, 1, 'orange')
	getPixelToHtml(49, 1, 'yellow')
	getPixelToHtml(49, 23, 'orange')
	getPixelToHtml(49, 5, 'white')
	getPixelToHtml(49, 3, 'gray')
	getPixelToHtml(49, 11, 'green')
}, 12500);

setTimeout(() => {
	getPixelToHtml(50, 18, 'blue')
	getPixelToHtml(50, 16, 'orange')
	getPixelToHtml(50, 11, 'black')
	getPixelToHtml(50, 1, 'orange')
	getPixelToHtml(50, 9, 'white')
	getPixelToHtml(50, 2, 'orange-dark')
	getPixelToHtml(50, 6, 'orange')
	getPixelToHtml(50, 2, 'gray-dark')
	getPixelToHtml(50, 1, 'yellow')
	getPixelToHtml(50, 1, 'orange')
	getPixelToHtml(50, 1, 'yellow')
	getPixelToHtml(50, 23, 'orange')
	getPixelToHtml(50, 5, 'white')
	getPixelToHtml(50, 4, 'gray')
	getPixelToHtml(50, 2, 'green')
	getPixelToHtml(50, 1, 'green-white')
	getPixelToHtml(50, 4, 'green')
	getPixelToHtml(50, 1, 'green-dark')
	getPixelToHtml(50, 2, 'green')
}, 12750);

setTimeout(() => {
	getPixelToHtml(51, 18, 'blue')
	getPixelToHtml(51, 16, 'orange')
	getPixelToHtml(51, 11, 'black')
	getPixelToHtml(51, 1, 'orange')
	getPixelToHtml(51, 2, 'white')
	getPixelToHtml(51, 2, 'gray')
	getPixelToHtml(51, 2, 'white')
	getPixelToHtml(51, 2, 'gray')
	getPixelToHtml(51, 2, 'white')
	getPixelToHtml(51, 1, 'orange-dark')
	getPixelToHtml(51, 6, 'orange')
	getPixelToHtml(51, 2, 'gray-dark')
	getPixelToHtml(51, 1, 'white')
	getPixelToHtml(51, 2, 'yellow')
	getPixelToHtml(51, 23, 'orange')
	getPixelToHtml(51, 7, 'white')
	getPixelToHtml(51, 2, 'gray')
	getPixelToHtml(51, 4, 'green')
	getPixelToHtml(51, 1, 'green-white')
	getPixelToHtml(51, 2, 'green')
	getPixelToHtml(51, 1, 'green-dark')
	getPixelToHtml(51, 2, 'green')
}, 13000);


setTimeout(() => {
	getPixelToHtml(52, 18, 'blue')
	getPixelToHtml(52, 16, 'orange')
	getPixelToHtml(52, 10, 'black')
	getPixelToHtml(52, 2, 'orange')
	getPixelToHtml(52, 2, 'white')
	getPixelToHtml(52, 2, 'gray')
	getPixelToHtml(52, 2, 'white')
	getPixelToHtml(52, 2, 'gray')
	getPixelToHtml(52, 2, 'white')
	getPixelToHtml(52, 1, 'orange-dark')
	getPixelToHtml(52, 6, 'orange')
	getPixelToHtml(52, 2, 'gray-dark')
	getPixelToHtml(52, 2, 'white')
	getPixelToHtml(52, 2, 'yellow')
	getPixelToHtml(52, 1, 'orange')
	getPixelToHtml(52, 6, 'yellow-white')
	getPixelToHtml(52, 2, 'orange')
	getPixelToHtml(52, 4, 'yellow-white')
	getPixelToHtml(52, 9, 'orange')
	getPixelToHtml(52, 7, 'white')
	getPixelToHtml(52, 2, 'gray')
	getPixelToHtml(52, 3, 'green')
	getPixelToHtml(52, 1, 'green-dark')
	getPixelToHtml(52, 3, 'green')
	getPixelToHtml(52, 1, 'green-dark')
	getPixelToHtml(52, 2, 'green')
}, 13250);

setTimeout(() => {
	getPixelToHtml(53, 18, 'blue')
	getPixelToHtml(53, 16, 'orange')
	getPixelToHtml(53, 8, 'black')
	getPixelToHtml(53, 3, 'orange')
	getPixelToHtml(53, 1, 'orange-dark')
	getPixelToHtml(53, 1, 'orange-white')
	getPixelToHtml(53, 8, 'white')
	getPixelToHtml(53, 2, 'orange-dark')
	getPixelToHtml(53, 6, 'orange')
	getPixelToHtml(53, 2, 'gray-dark')
	getPixelToHtml(53, 2, 'white')
	getPixelToHtml(53, 1, 'yellow')
	getPixelToHtml(53, 1, 'white')
	getPixelToHtml(53, 1, 'yellow')
	getPixelToHtml(53, 7, 'yellow-white')
	getPixelToHtml(53, 1, 'orange')
	getPixelToHtml(53, 5, 'yellow-white')
	getPixelToHtml(53, 8, 'orange')
	getPixelToHtml(53, 5, 'white')
	getPixelToHtml(53, 3, 'gray')
	getPixelToHtml(53, 11, 'green')
}, 13500);

setTimeout(() => {
	getPixelToHtml(54, 17, 'blue')
	getPixelToHtml(54, 17, 'orange')
	getPixelToHtml(54, 6, 'black')
	getPixelToHtml(54, 4, 'orange')
	getPixelToHtml(54, 2, 'orange-dark')
	getPixelToHtml(54, 2, 'orange-white')
	getPixelToHtml(54, 6, 'white')
	getPixelToHtml(54, 2, 'orange-dark')
	getPixelToHtml(54, 7, 'orange')
	getPixelToHtml(54, 2, 'gray-dark')
	getPixelToHtml(54, 2, 'white')
	getPixelToHtml(54, 1, 'yellow')
	getPixelToHtml(54, 1, 'white')
	getPixelToHtml(54, 1, 'yellow')
	getPixelToHtml(54, 6, 'yellow-white')
	getPixelToHtml(54, 1, 'yellow')
	getPixelToHtml(54, 5, 'yellow-white')
	getPixelToHtml(54, 1, 'yellow')
	getPixelToHtml(54, 10, 'orange')
	getPixelToHtml(54, 3, 'white')
	getPixelToHtml(54, 4, 'gray')
	getPixelToHtml(54, 1, 'green')
	getPixelToHtml(54, 1, 'green-dark')
	getPixelToHtml(54, 8, 'green')
}, 13750);

setTimeout(() => {
	getPixelToHtml(55, 17, 'blue')
	getPixelToHtml(55, 17, 'orange')
	getPixelToHtml(55, 4, 'black')
	getPixelToHtml(55, 5, 'orange')
	getPixelToHtml(55, 4, 'orange-dark')
	getPixelToHtml(55, 2, 'orange-white')
	getPixelToHtml(55, 4, 'white')
	getPixelToHtml(55, 2, 'orange-dark')
	getPixelToHtml(55, 7, 'orange')
	getPixelToHtml(55, 2, 'gray-dark')
	getPixelToHtml(55, 4, 'white')
	getPixelToHtml(55, 1, 'yellow')
	getPixelToHtml(55, 3, 'yellow-white')
	getPixelToHtml(55, 2, 'yellow')
	getPixelToHtml(55, 2, 'yellow-white')
	getPixelToHtml(55, 1, 'yellow')
	getPixelToHtml(55, 1, 'orange-dark')
	getPixelToHtml(55, 2, 'yellow')
	getPixelToHtml(55, 2, 'yellow-white')
	getPixelToHtml(55, 1, 'yellow')
	getPixelToHtml(55, 10, 'orange')
	getPixelToHtml(55, 5, 'white')
	getPixelToHtml(55, 2, 'gray')
	getPixelToHtml(55, 4, 'green')
	getPixelToHtml(55, 1, 'green-white')
	getPixelToHtml(55, 3, 'green')
	getPixelToHtml(55, 1, 'green-white')
	getPixelToHtml(55, 1, 'green')
}, 14000);


setTimeout(() => {
	getPixelToHtml(56, 17, 'blue')
	getPixelToHtml(56, 17, 'orange')
	getPixelToHtml(56, 3, 'black')
	getPixelToHtml(56, 6, 'orange')
	getPixelToHtml(56, 5, 'orange-dark')
	getPixelToHtml(56, 1, 'orange-white')
	getPixelToHtml(56, 4, 'white')
	getPixelToHtml(56, 1, 'orange-dark')
	getPixelToHtml(56, 8, 'orange')
	getPixelToHtml(56, 2, 'gray-dark')
	getPixelToHtml(56, 4, 'white')
	getPixelToHtml(56, 1, 'yellow')
	getPixelToHtml(56, 3, 'yellow-white')
	getPixelToHtml(56, 1, 'yellow')
	getPixelToHtml(56, 1, 'white')
	getPixelToHtml(56, 2, 'yellow-white')
	getPixelToHtml(56, 1, 'yellow')
	getPixelToHtml(56, 3, 'white')
	getPixelToHtml(56, 3, 'yellow-white')
	getPixelToHtml(56, 9, 'orange')
	getPixelToHtml(56, 3, 'orange-dark')
	getPixelToHtml(56, 4, 'white')
	getPixelToHtml(56, 4, 'green')
	getPixelToHtml(56, 1, 'green-white')
	getPixelToHtml(56, 6, 'green')
}, 14250);


setTimeout(() => {
	getPixelToHtml(57, 17, 'blue')
	getPixelToHtml(57, 17, 'orange')
	getPixelToHtml(57, 2, 'black')
	getPixelToHtml(57, 7, 'orange')
	getPixelToHtml(57, 5, 'orange-dark')
	getPixelToHtml(57, 1, 'orange-white')
	getPixelToHtml(57, 5, 'orange-dark')
	getPixelToHtml(57, 8, 'orange')
	getPixelToHtml(57, 2, 'gray-dark')
	getPixelToHtml(57, 5, 'white')
	getPixelToHtml(57, 3, 'yellow-white')
	getPixelToHtml(57, 1, 'yellow')
	getPixelToHtml(57, 1, 'white')
	getPixelToHtml(57, 2, 'yellow-white')
	getPixelToHtml(57, 1, 'yellow')
	getPixelToHtml(57, 3, 'white')
	getPixelToHtml(57, 3, 'yellow-white')
	getPixelToHtml(57, 1, 'yellow')
	getPixelToHtml(57, 16, 'orange-dark')
	getPixelToHtml(57, 5, 'green')
	getPixelToHtml(57, 1, 'green-dark')
	getPixelToHtml(57, 4, 'green')
}, 14500);

setTimeout(() => {
	getPixelToHtml(58, 17, 'blue')
	getPixelToHtml(58, 17, 'orange')
	getPixelToHtml(58, 2, 'black')
	getPixelToHtml(58, 7, 'orange')
	getPixelToHtml(58, 5, 'orange-dark')
	getPixelToHtml(58, 1, 'orange-white')
	getPixelToHtml(58, 5, 'orange-dark')
	getPixelToHtml(58, 8, 'orange')
	getPixelToHtml(58, 2, 'gray-dark')
	getPixelToHtml(58, 5, 'white')
	getPixelToHtml(58, 3, 'yellow-white')
	getPixelToHtml(58, 1, 'yellow')
	getPixelToHtml(58, 2, 'white')
	getPixelToHtml(58, 2, 'yellow-white')
	getPixelToHtml(58, 1, 'yellow')
	getPixelToHtml(58, 2, 'white')
	getPixelToHtml(58, 3, 'yellow-white')
	getPixelToHtml(58, 1, 'yellow')
	getPixelToHtml(58, 16, 'orange-dark')
	getPixelToHtml(58, 7, 'green')
	getPixelToHtml(58, 1, 'green-white')
	getPixelToHtml(58, 2, 'green')
}, 14750);

setTimeout(() => {
	getPixelToHtml(59, 17, 'blue')
	getPixelToHtml(59, 17, 'orange')
	getPixelToHtml(59, 3, 'black')
	getPixelToHtml(59, 6, 'orange')
	getPixelToHtml(59, 5, 'orange-dark')
	getPixelToHtml(59, 1, 'orange-white')
	getPixelToHtml(59, 4, 'white')
	getPixelToHtml(59, 1, 'orange-dark')
	getPixelToHtml(59, 8, 'orange')
	getPixelToHtml(59, 2, 'gray-dark')
	getPixelToHtml(59, 4, 'white')
	getPixelToHtml(59, 1, 'yellow')
	getPixelToHtml(59, 3, 'yellow-white')
	getPixelToHtml(59, 1, 'yellow')
	getPixelToHtml(59, 2, 'white')
	getPixelToHtml(59, 2, 'yellow-white')
	getPixelToHtml(59, 1, 'yellow')
	getPixelToHtml(59, 2, 'white')
	getPixelToHtml(59, 4, 'yellow-white')
	getPixelToHtml(59, 8, 'orange')
	getPixelToHtml(59, 3, 'orange-dark')
	getPixelToHtml(59, 3, 'white')
	getPixelToHtml(59, 1, 'white-dark')
	getPixelToHtml(59, 4, 'green')
	getPixelToHtml(59, 1, 'green-dark')
	getPixelToHtml(59, 6, 'green')
}, 15000);






















