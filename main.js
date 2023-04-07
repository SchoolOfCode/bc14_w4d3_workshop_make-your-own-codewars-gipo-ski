/* 
👉 Write your kata here!
"And the winner of the 'gipo-ski award' is..."

you are the host of big-g show. its your job to announce the winner of the 'gipo-ski award'.
there are 8 possible winners: Michael, Abigail, Sofia, Sebastian, Noah, Evangeline, David or Kunle.
only one person could be named winner.

you have chosen to name the person whose name comes first alphabetically as the winner.

write a function that returns the 'winner' from the 8 'nominees' names.
the winner is announced in this format: 'And the winner of the 'gipo-ski award' is "winner-name-goes-here"!'
the first 3 letters of winner's name should be in capital letters.
*/

//👉 Write the function your CodeWarriors will start with below here:
export function andTheWinnerIs() {
  //write your code here.
  //store nominees in an array
  const nominees = [
    "Michael",
    "Abigail",
    "Sofia",
    "Sebastian",
    "Noah",
    "Evangeline",
    "David",
    "Kunle",
  ];
  //sort the array
  const nomineesSorted = nominees.sort();
  //slice() winner name after 3rd character of name
  const restOfWinnerName = nomineesSorted[0].slice(3);
  //slice() 1st 3 characters of winner name, capitalise it and concatinate restOfWinnerName to it
  const winner = nomineesSorted[0].slice(0, 3).toUpperCase() + restOfWinnerName;
  //get result
  return `And the winner of the 'gipo-ski award' is ${winner}!`;
}
// winner = andTheWinnerIs();
console.log(andTheWinnerIs());
