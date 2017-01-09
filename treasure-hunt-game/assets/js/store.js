// Global store for everything
	  
	  	//Current score in game. Modified by use of clues

      var store = {
		currentID : 0,
	    currentScore : 0,	//Temp score when playing game
		score : 0,
		gamesPlayed: 0,
        favouritePubs: [],
		rewardsClaimed: [],
		
        pubs: {
          0: {
            id: 0,
            name: 'Friend at Hand',
            description: 'a cosy little pub ',
			gameType: 'multipleChoice',
            pubGameDescription: 'Play series of quizes and questions and earn rewards for correct answers',
            address: '255–256 Upper Street Islington, London, N1 5AQ',
            telephone: '+44 7477 777 777',
            workingHours: 'Mon - Sun 08:00 - 00:00',
			thumbnail: 'assets/images/fav1.jpg'
          },
          1: {
            id: 1,
            name: 'Lamb',
            description: 'Another nice pub, please come by.',
			gameType: 'multipleChoice',
            pubGameDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra elementum euismod.',
            address: '255–256 Upper Street Islington, London, N1 5AQ',
            telephone: '+44 7477 777 777',
            workingHours: 'Mon - Sun 08:00 - 00:00', 
			thumbnail: 'assets/images/fav2.jpg'
          },
          2: {
            id: 2,
            name: 'Museum Tavern',
            description: 'This pub is cool too',
			gameType: 'spotDifference',
            pubGameDescription: 'Play series of quizes and questions and earn rewards for correct answers',
            address: '255–256 Upper Street Islington, London, N1 5AQ',
            telephone: '+44 7477 777 777',
            workingHours: 'Mon - Sun 08:00 - 00:00',
			thumbnail: 'assets/images/fav3.jpg'
          }
        },
		
		//Games
		games: {
			0: {
				//Friend at Hand
				pubID: 0,
				question: 'What is found on the pub sign?',
				answers: ['Dog', 'Beer', 'Horse'],
				correctAnswer: 0,
				clues: ['The pub sign is found outside', 'It is an animal', 'A Friend to Man'],
				reward: 250
			},
		
			1: {
				//Lamb
				pubID: 1,
				question: 'What is found on the pub sign?',
				answers: 'Dog',
				correctAnswer: 'Dog',
				test: 'eee',
				clues: 'Dog',
				reward: 250
			},
			
			2: {
				//Museum Tavern
				pubID: 2,
				pointX: 600, //X position of correct answer
				pointY: 155, //Y position of correct answer
				clues: ['On the right', 'On the ceiling', 'Lightgiver'],
				reward: 500
			}
		},
		
		//Rewards
		rewards: {
			0: {
				id: 0,
				name: 'Friend at Hand - Free Pint',
				cost: '500'
			},
			
			1: {
				id: 1,
				name: 'Friend at Hand - Free Onion Rings',
				cost: '250'
			},
			
			2: {
				id: 2,
				name: 'Lamb - Free Pint',
				cost: '500'
			},
			
			3: {
				id: 3,
				name: 'Lamb - Free Onion Rings',
				cost: '250'
			},
				
			4: {
				id: 4,
				name: 'Museum Tavern - Free Pint',
				cost: '500'
			},
			
			5: {
				id: 5,
				name: 'Museum Tavern - Free Onion Rings',
				cost: '250'
			}
		}
};
	  