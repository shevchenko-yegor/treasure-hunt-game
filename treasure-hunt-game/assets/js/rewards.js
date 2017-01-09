function buildRewards(){
	document.getElementById("rewardsList").innerHTML = '';
	_.each(store.rewards, function(rew) {
		var claim;
		var ref;
		
		if(store.rewardsClaimed.includes(rew)){
			claim = 'Reward claimed!';
			ref = 'onclick="buildReward(' + rew.id + ')" href="#reward"';
		}else{
			claim = '';
			ref = 'onclick="purchase(' + rew.id + ')"';
		}
		
		var html = ''
			+'<li id="rew' + rew.id + '">'
				+'<a id="linkRef" ' + ref + '>'
				+'<h2 class="pub-name"  style="font-size:26px">' + rew.name + '</h2>'
				+'<p class="scored-points">' + rew.cost + ' points</p>'
				+'<p  class="claim">' + claim + '</p>'
				+'</a>'
			+'</li>';
			document.getElementById("rewardsList").innerHTML += html;
	});
}

function claimReward(id){
	store.rewardsClaimed.push(id);
	document.getElementById("rew" + id).getElementsByClassName("claim")[0].innerHTML = "<p>Reward claimed!</p>";
	document.getElementById("rew" + id).href = "#reward";
	buildRewards();
}

function purchase(id){
   var retVal = confirm('Purchase "' + store.rewards[id].name + '" for ' + store.rewards[id].cost + ' points?');
   if( retVal === true ){
	  claimReward(id);
	  return true;
   }
   else{
	  return false;
   }
}