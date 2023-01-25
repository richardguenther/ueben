console.log("Hello from traversy.js");

const postis = [
	{ title: "Post One", author: "richard" },
	{ title: "Zwei", author: "lisa" },
	{ title: "drei", author: "sophia" },
	{ title: "vier", author: "jurek" },
];

function getNeuestenPost(posts) {
	console.log(posts.pop());
}

function sayHello({ greeting, name }) {
	alert(greeting + " " + name + "!");
}
