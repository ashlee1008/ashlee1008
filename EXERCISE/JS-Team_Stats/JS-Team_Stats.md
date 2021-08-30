# Team Stats

We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

Once created, you can manipulate these data structures as well as gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.

1.  We want a data structure to store the information about our team. Create an empty team object.

```javascript
const team = {};
```

2.  Our team has players, and the team plays games. We want to represent both of these. Add two properties to your team object. A \_players property and a \_games property that are both initialized to empty arrays.

    ```javascript
    const team = {
      _players: [],
      _games: [],
    };
    ```

3.  Populate the empty array that corresponds to the \_players key in your team object with three actual players. They should be in the following format:

    ```javascript
    const team = {
      _players: [
        {
          firstName: "Pablo",
          lastName: "Sanchez",
          age: 11,
        },
        {
          firstName: "Pablo",
          lastName: "Sanchez",
          age: 11,
        },
        {
          firstName: "Pablo",
          lastName: "Sanchez",
          age: 11,
        },
      ],
      
    };
    ```

4.  Populate the empty array that corresponds to the \_games key in your object with three actual games. They should be in the following format:

```javascript
const team = {
  
  _games: [
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27,
    },
  ],
};
```

5.  Create getter methods for your \_players and \_games keys. You do not need to create setter methods, because we don’t want anyone to change the values saved to these keys.

    ```javascript
    const team = {
     
      get players() {
        return this._players;
      },

      get games() {
        return this._games;
      },
    };
    ```

6.  We want to add a new player to your team. Add a method addPlayer to your team object. This method should take in three parameters: firstName, lastName, and age. It should create a player object, and add them to the team‘s players array.

    ```javascript
    const team = {
      
      addPlayer(firstName, lastName, age) {
        this._players.push({
          firstName,
          lastName,
          age,
        });
      },
    };
    ```

7.  Below your team object, invoke your addPlayer method on the following players: Steph Curry Age 28,Lisa Leslie Age 44, and Bugs Bunny Age 76.

    Print out the team‘s players to check they were all properly added.

    ```javascript
    team.addPlayer("Steph", "Curry", 28);
    team.addPlayer("Lisa", "Leslie", 44);
    team.addPlayer("Bugs", "Bunny", 76);

    console.log(team.players)
    
    ```

8.  The scorekeeper has some new information for us! Add a similar method for recording game results called addGame that:

    - takes in an opponent’s name, `#1`
    - your team’s points, `#2`
    - the opponent’s points, `#3`
    - creates a game object, `#4`
    - adds the game object to your team‘s games array. `#5`

    ```javascript
    const team = {
      
      addGame(opponent, teamPoints, opponentPoints) {
        
        this._games.push({
          opponent, 
          teamPoints, 
          opponentPoints,
        });
      },
    };
    team.addGame("demon", 10, 10);
    team.addGame("god of sum", 41, 0);

    console.log(team.games);
    
    ```
