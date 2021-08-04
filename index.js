var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question('What is your name ? ');
console.log('Welcome ' + userName);

function play(questions, answer) {
	var userAnswer = readlineSync.question(questions);
	if (userAnswer === answer) {
		console.log('you are correct');
		score++;
	} else {
		console.log('You are wrong');
		score--;
	}
	console.log('Curresnt Score : ' + score);
	console.log('\n');
}
q1 = {
	q: 'My age is more than 25 ? ',
	a: 'yes'
};
q2 = {
	q: 'Do I live in Kota ? ',
	a: 'yes'
};
q3 = {
	q: 'Who is my fav Superhero ? ',
	a: 'Batman'
};
q4 = {
	q: 'What is my fav dish ?',
	a: 'vada paav'
};
questions = [q1, q2, q3, q4];

for (var i = 0; i < questions.length; i++) {
	play(questions[i].q, questions[i].a);
}

console.log('-----------------');
console.log('Your final score :' + score);
