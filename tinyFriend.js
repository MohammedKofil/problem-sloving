var friend = ["Javia", "Tania", "Sakila", "Usha", "Sam","Janntaul Jahan"];

function tinyFriend(friend){
    return friend.reduce(function(prevWord,currWord) {
		if (currWord.length < prevWord.length) {
			return currWord;
		}
		else 
			return prevWord;
	}
    )
}
var TinyFriendFinded = tinyFriend(friend);
console.log("Here the Tiny Friend of main is: ", TinyFriendFinded);
