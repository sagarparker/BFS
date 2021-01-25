
/* 
		      Sagar
	         /    \
	  Michael      Dwight
	 /      \     /      \
	Jim    Pam   Angela	  Mose
*/

// javascript object representation of the above tree

let tree = {
	"Sagar": {
		value: "Sagar",
		left: "Michael",
		right: "Dwight",
	},
	"Michael": {
		value: "Michael",
		left: "Jim",
		right: "Pam",
	},
	"Dwight": {
		value: "Dwight",
		left: "Angela",
		right: "Mose",
	},
	"Jim": {
		value: "Jim",
		left: null,
		right: null,
	},
	"Pam": {
		value: "Pam",
		left: null,
		right: null,
	},
	"Angela": {
		value: "Angela",
		left: null,
		right: null,
	},
	"Mose": {
		value: "Mose",
		left: null,
		right: null,
	},
};

let SearchForMutualFriends = (tree, username, searchUser) => {
	// make a queue array
	let queue = [];
	// populate it with the node that will be the root of your search
	queue.push(username);

	// search the queue until it is empty
	while (queue.length > 0) {
		// assign the top of the queue to variable currentNode
		let currentNode = queue[0];

		// if currentNode is the node we're searching for, break & alert
		if (currentNode.value === searchUser) {
			console.log(`${searchUser} is a mutual friend of ${username.value}.\n`);
			return;
		}

		// if currentNode has a left child node, add it to the queue.
		if (currentNode.left !== null) {
			queue.push(tree[currentNode.left]);
		}

		// if currentNode has a right child node, add it to the queue.
		if (currentNode.right !== null) {
			queue.push(tree[currentNode.right]);
        }
        
		// remove the currentNode from the queue.
		queue.shift();
	}
	console.log(`${searchUser} is not a mutual friend of ${username.value}.\n`);
};


let userRecommendations = (tree, username) => {
	// make a queue array
	let queue = [];
	let userRecmList = [];
	// populate it with the node that will be the root of your search
	queue.push(username);

	// search the queue until it is empty
	while (queue.length > 0) {

		// assign the top of the queue to variable currentNode
		let currentNode = queue[0];
		console.log("Friend Recommendation : " + currentNode.value);
		userRecmList.push(currentNode.value);


		// if currentNode has a left child node, add it to the queue.
		if (currentNode.left !== null) {
			queue.push(tree[currentNode.left]);
		}

		// if currentNode has a right child node, add it to the queue.
		if (currentNode.right !== null) {
			queue.push(tree[currentNode.right]);
        }
        
		// remove the currentNode from the queue.
		queue.shift();
	}

	return userRecmList;
};


SearchForMutualFriends(tree,tree['Sagar'],'Dwight');

userRecommendations(tree,tree['Sagar']);

