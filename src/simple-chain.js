import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  array: [],

  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
        position <= 0 ||
        typeof position !== "number" ||
        position > this.array.length
    ) {
      this.array = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.array.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.array.reverse();
    return this;
  },

  finishChain() {
    const chain = this.array.join("~~");
    this.array = [];
    return chain;
  },
};
