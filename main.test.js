//👉 Write your tests below here:
import { test, expect } from "@jest/globals";
import { andTheWinnerIs } from './main.js';

//test for winner not to be equal to 'Michael'.
test("when andTheWinnerIs is called, 'And the winner of the 'gipo-ski award' is Michael!' should NOT be displayed ", function () {
  //arrange
  const actual = andTheWinnerIs();
  const expected = "And the winner of the 'gipo-ski award' is Michael!";
  //assert
  expect(actual).not.toBe(expected);
});

//test for winner not to be equal to 'Abigail'.
test("when andTheWinnerIs is called, 'And the winner of the 'gipo-ski award' is Abigai!' should NOT be displayed ", function () {
  //arrange
  const actual = andTheWinnerIs();
  const expected = "And the winner of the 'gipo-ski award' is Abigail!";
  //assert
  expect(actual).not.toBe(expected);
});

//test for winner not to be equal to 'Sofia'.
test("when andTheWinnerIs is called, 'And the winner of the 'gipo-ski award' is Sofia!' should NOT be displayed ", function () {
  //arrange
  const actual = andTheWinnerIs();
  const expected = "And the winner of the 'gipo-ski award' is Sofia!";
  //assert
  expect(actual).not.toBe(expected);
});

//test for winner not to be equal to 'Sebastian'.
test("when andTheWinnerIs is called, 'And the winner of the 'gipo-ski award' is Sebastian!' should NOT be displayed ", function () {
  //arrange
  const actual = andTheWinnerIs();
  const expected = "And the winner of the 'gipo-ski award' is Sebastian!";
  //assert
  expect(actual).not.toBe(expected);
});

//test for winner not to be equal to 'Noah'.
test("when andTheWinnerIs is called, 'And the winner of the 'gipo-ski award' is Noah!' should NOT be displayed ", function () {
  //arrange
  const actual = andTheWinnerIs();
  const expected = "And the winner of the 'gipo-ski award' is Noah!";
  //assert
  expect(actual).not.toBe(expected);
});

//test for winner not to be equal to 'Evangeline'.
test("when andTheWinnerIs is called, 'And the winner of the 'gipo-ski award' is Evangeline!' should NOT be displayed ", function () {
  //arrange
  const actual = andTheWinnerIs();
  const expected = "And the winner of the 'gipo-ski award' is Evangeline!";
  //assert
  expect(actual).not.toBe(expected);
});

//test for winner not to be equal to 'David'.
test("when andTheWinnerIs is called, 'And the winner of the 'gipo-ski award' is David!' should NOT be displayed ", function () {
  //arrange
  const actual = andTheWinnerIs();
  const expected = "And the winner of the 'gipo-ski award' is David!";
  //assert
  expect(actual).not.toBe(expected);
});

//test for winner not to be equal to 'Kunle'.
test("when andTheWinnerIs is called, 'And the winner of the 'gipo-ski award' is Kunle!' should NOT be displayed ", function () {
  //arrange
  const actual = andTheWinnerIs();
  const expected = "And the winner of the 'gipo-ski award' is Kunle!";
  //assert
  expect(actual).not.toBe(expected);
});

//test for andTheWinnerIs function call.
test("when andTheWinnerIs is called, 'And the winner of the 'gipo-ski award' is ABIgail!' should be displayed ", function () {
  //arrange
  const actual = andTheWinnerIs();
  const expected = "And the winner of the 'gipo-ski award' is ABIgail!";
  //assert
  expect(actual).toBe(expected);
});