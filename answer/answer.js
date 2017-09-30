
let numbers = [1,2,3,4,5,6,7,8,9,10]

// answer1 forEachメソッドを使用
numbers.forEach(function(number){
	console.log(number)
})

// answer2 for...of文を使用
for(let number of numbers ){
	console.log(number)
}

// answer3 for...in文を使用
for(let number in numbers){
	console.log(number)
}

