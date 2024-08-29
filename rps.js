function getComputerChoice() {
    randChoice = Math.floor(Math.random() * 3) + 1; // numbers 1 - 3
    return randChoice;
}

console.log("This is Paper Rocket Sword");
computerChoice = getComputerChoice();
playerChoice = prompt();
console.log("Player Choice:     " + playerChoice);
console.log("Computer Choice:   " + computerChoice);
if(playerChoice < computerChoice)
{
    console.log("Player Wins");
}
else if(playerChoice > computerChoice)
{
    console.log("Computer Wins");
}
else if(playerChoice == computerChoice)
{
    console.log("No one wins.");
}
