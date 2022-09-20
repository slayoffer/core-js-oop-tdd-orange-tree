const OrangeTree = require('../orange-tree');

// Test-Driven Development
describe('OrangeTree', () => {

  let tree;

  beforeEach(() => {
    tree = new OrangeTree(10, 15);
  });

  describe('age', () => {
    test('has an age', () => {
      expect(tree.age).toBe(10);
    });
  });

  describe('height', () => {
    test('has a height', () => {
      expect(tree.height).toBe(15);
    });
  });

  describe('passGrowingSeason', () => {
    test('should change the tree age', () => {
      tree.passGrowingSeason();
      expect(tree.age).toBe(11);
    });

    test('should make the tree grow', () => {
      tree.passGrowingSeason();
      expect(tree.height).toBe(15 + 2.5);
    });

    test('should cause the tree to produce oranges', () => {
      tree.passGrowingSeason();
      console.log(tree.age);
      expect(tree.oranges.length).not.toBe(0);
    });

  });

  describe('isMature', () => {
    test('returns true if tree is old enough to bear fruit', () => {
      expect(tree.isMature()).toBe(true);
    });

    test('returns false if tree is not old enough to bear fruit', () => {
      const newTree = new OrangeTree(2, 15);
      expect(newTree.isMature()).toBeFalsy();
    });
  });

  describe('isDead', () => {
    test('should return false for an alive tree', () => {
      expect(tree.isDead()).toBeFalsy();
    });

    test('should return true for a dead tree', () => {
      const newCoolTree = new OrangeTree(150, 15);
      expect(newCoolTree.isDead()).toBeTruthy();
    });
  });

  describe('hasOranges', () => {
    test('should return true if oranges are on the tree', () => {
      const superCoolTree = new OrangeTree(15, 19);
      superCoolTree.passGrowingSeason();
      expect(superCoolTree.hasOranges()).toBeTruthy();
    });

    test('should return false if the tree has no oranges', () => {
      const superCoolTree2 = new OrangeTree(15, 19);
      expect(superCoolTree2.hasOranges()).toBeFalsy();
    });
  });

  describe('pickAnOrange', () => {
    test('should return an orange from the tree', () => {
      const orangeTree = new OrangeTree(10, 15);
      orangeTree.passGrowingSeason();
      expect(typeof orangeTree.pickAnOrange() === 'object').toBe(true);
    });

    test('the returned orange should no longer be on the tree', () => {
      const orangeTree = new OrangeTree(10, 15);
      orangeTree.passGrowingSeason();
      const removedOrange = orangeTree.pickAnOrange();
      expect(orangeTree.oranges).not.toContain(removedOrange);
    });

    test('should raise an error if the tree has no oranges', () => {
      const orangeTree = new OrangeTree(10, 15);
      expect(() => orangeTree.pickAnOrange()).toThrowError();
    });
  });
});
