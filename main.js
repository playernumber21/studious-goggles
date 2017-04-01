var glasses = 0;

function workClick(number){
    glasses = glasses + number;
    document.getElementById("glasses").innerHTML = glasses;
};

var friends = 0;

function buyFriend(){
    var friendCost = Math.floor(10 * Math.pow(1.1,friends));     //works out the cost of this friend
    if(glasses >= friendCost){                                   //checks that the player can afford the friend
        friends = friends + 1;                                   //increases number of friends
    	glasses = glasses - friendCost;                          //removes the glasses spent
        document.getElementById('friends').innerHTML = friends;  //updates the number of friends for the user
        document.getElementById('glasses').innerHTML = glasses;  //updates the number of glasses for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,friends));       //works out the cost of the next friend
    document.getElementById('friendCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	workClick(friends);
	
}, 1000);
