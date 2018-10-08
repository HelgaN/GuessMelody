import assert from 'assert';
import {initialState, setLevel, levels} from './data';

describe(`Game`, () => {
  describe(`Character levels`, () => {
    it(`should update level`, () => {
      assert.deepEqual(levels[1], setLevel(initialState, levels, 1).level);
    });
    it(`shouldn't allow negative level`, () => {
      const setNegativeLevel = () => {
        setLevel(initialState, levels, -1);
      };
      assert.throws(setNegativeLevel);
    });
    it(`should be the first of the questions at the start`, () => {
      assert.deepEqual(levels[0], initialState.level);
    });
    it(`shouldn't be more than 10 questions`, () => {
      const setMoreThanTenLevel = () => {
        setLevel(initialState, levels, 10);
      };
      assert.throws(setMoreThanTenLevel);
    });
  });
});
