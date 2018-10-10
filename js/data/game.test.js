import assert from 'assert';
import {initialState, currentState, nextLevel, levels} from './data';

describe(`Game`, () => {
  describe(`Character levels`, () => {
    it(`should update level`, () => {
      assert(1, nextLevel(currentState).level);
    });
    it(`should be the first of the questions at the start`, () => {
      assert.equal(0, initialState.level);
    });
    it(`should be 10 questions`, () => {
      assert(10, levels.length);
    });
  });

  describe(`Duration of the game`, () => {
    it(`Duration of the game should be 2 minutes`, () => {
      assert.equal(2, initialState.mins);
      assert.equal(0, initialState.secs);
    });
  });


});
