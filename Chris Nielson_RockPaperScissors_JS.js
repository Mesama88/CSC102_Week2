function playRPS()
{
    //Create a random number
    var player1 = Math.ceil(Math.random()*3);
    var player2 = Math.ceil(Math.random()*3);
    var rockImage = "images_RPS_Rock.bmp";
    var paperImage = "images_RPS_Paper.bmp";
    var scissorsImage = "images_RPS_Scissors.bmp";
    // Attempted creating a scoreboard to track number of wins since the page was loaded/reloaded.
    // var player1Score; 
    // var player2Score;

    //If player 1 random number is 1, present img for rock.
    if (player1 == 1)
    {
        document.getElementById("player1Img").src = rockImage;
    }
     //If player 1 random number is 2, present img for paper.
    else if (player1 == 2)
    {
        document.getElementById("player1Img").src = paperImage;
    }
       //if not 1 or 2 above, that leaves only 3. Present img for Scissors.
    else
    {
        document.getElementById("player1Img").src = scissorsImage;
    }

    //If player 2 random number is 1, present img for rock.
    if (player2 == 1)
    {
        document.getElementById("player2Img").src = rockImage;
    }
    //If player 2 random number is 2, present img for paper.
    else if (player2 == 2)
    {
        document.getElementById("player2Img").src = paperImage;
    }
    //if not 1 or 2 above, that leaves only 3. Present img for Scissors.
    else
    {
        document.getElementById("player2Img").src = scissorsImage;
    }

// Rock is 1___Paper is 2___Scissors is 3
// && is an AND function, both conditions must be true.
// || is an OR function.

    //if the same, no winner
    if (player1 == player2)
    {
        document.getElementById("finalResult").innerHTML = "DRAW";
    }
    
    //if Paper and Rock, paper wins.
    else if (  (player1 == 2 && player2 == 1) 
    //if Scissors and Paper, scissors wins.    
            || (player1 == 3 && player2 == 2) 
    //if Rock and Scissors, rock wins.    
            || (player1 == 1 && player2 == 3))
    {
        // All of the above are true = Player 1 wins.
        document.getElementById("finalResult").innerHTML = "Player 1 wins";
        // Attempting to create a scoreboard to track the number of wins per player. increments each time a round is played.
        // player1Score++;
        // document.getElementById("player1Score").innerHTML = player1Score;
    }
    else
    {
        // If none of the above are true, Player 2 must be the winner.
        document.getElementById("finalResult").innerHTML = "Payer 2 wins";
        // Attempting to create a scoreboard to track the number of wins per player. increments each time a round is played.
        // player2Score++;
        // document.getElementById("player2Score").innerHTML = player2Score;
    } 
}

function playDice()
{
    //Create a random number 1-6 represnting a dice. Two times per player.
    var player1Dice = Math.ceil(Math.random()*6);
    var player3Dice = Math.ceil(Math.random()*6);
    var player2Dice = Math.ceil(Math.random()*6);
    var player4Dice = Math.ceil(Math.random()*6);
    var player1DiceAdded //varible to hold the sum of the two dice.
    var player2DiceAdded
    var dice1 = "images_Dice_1.bmp"; //PICTURES
    var dice2 = "images_Dice_2.bmp";
    var dice3 = "images_Dice_3.bmp";
    var dice4 = "images_Dice_4.bmp";
    var dice5 = "images_Dice_5.bmp";
    var dice6 = "images_Dice_6.bmp";
    
        //Set the dice image to match player1's number.
        if (player1Dice == 1)
            {document.getElementById("player1DiceImg").src = dice1;}
        else if (player1Dice == 2)
            {document.getElementById("player1DiceImg").src = dice2;}
        else if (player1Dice == 3)
            {document.getElementById("player1DiceImg").src = dice3;}
        else if (player1Dice == 4)
            {document.getElementById("player1DiceImg").src = dice4;}
        else if (player1Dice == 5)
            {document.getElementById("player1DiceImg").src = dice5;}
        else 
            {document.getElementById("player1DiceImg").src = dice6;}

        //Set the dice image to match player2's number.
        if (player3Dice == 1)
            {document.getElementById("player3DiceImg").src = dice1;}
        else if (player3Dice == 2)
            {document.getElementById("player3DiceImg").src = dice2;}
        else if (player3Dice == 3)
            {document.getElementById("player3DiceImg").src = dice3;}
        else if (player3Dice == 4)
            {document.getElementById("player3DiceImg").src = dice4;}
        else if (player3Dice == 5)
            {document.getElementById("player3DiceImg").src = dice5;}
        else 
            {document.getElementById("player1DiceImg").src = dice6;}


        //Set the dice image to match player3's number.
            if (player2Dice == 1)
            {document.getElementById("player2DiceImg").src = dice1;}
        else if (player2Dice == 2)
            {document.getElementById("player2DiceImg").src = dice2;}
        else if (player2Dice == 3)
            {document.getElementById("player2DiceImg").src = dice3;}
        else if (player2Dice == 4)
            {document.getElementById("player2DiceImg").src = dice4;}
        else if (player2Dice == 5)
            {document.getElementById("player2DiceImg").src = dice5;}
        else 
            {document.getElementById("player2DiceImg").src = dice6;}

        //Set the dice image to match player4's number.    
        if (player4Dice == 1)
            {document.getElementById("player4DiceImg").src = dice1;}
        else if (player4Dice == 2)
            {document.getElementById("player4DiceImg").src = dice2;}
        else if (player4Dice == 3)
            {document.getElementById("player4DiceImg").src = dice3;}
        else if (player4Dice == 4)
            {document.getElementById("player4DiceImg").src = dice4;}
        else if (player4Dice == 5)
            {document.getElementById("player4DiceImg").src = dice5;}
        else 
            {document.getElementById("player4DiceImg").src = dice6;}

    //Set a variable to sum the two dices together for each player for evaluating the greater sum.
    var player1DiceAdded = player1Dice + player3Dice;
    var player2DiceAdded = player2Dice + player4Dice;

    //if the same, no winner
    if (player1DiceAdded == player2DiceAdded)
    {
        document.getElementById("finalDiceResult").innerHTML = "DRAW";
    }
    //If not the same, Player 1 wins if their number is bigger.
    else if (player1DiceAdded > player2DiceAdded) 
    {
        document.getElementById("finalDiceResult").innerHTML = "Player 1 wins";
    }
    //If not the same, and player1 isn't larger, then player2 must be the winner.
    else
    {   
        document.getElementById("finalDiceResult").innerHTML = "Payer 2 wins";
    } 
}

