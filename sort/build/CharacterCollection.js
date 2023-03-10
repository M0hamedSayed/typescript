"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharacterCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    ;
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase();
    }
    swap(leftIndex, rightIndex) {
        const arrayFromString = this.data.split('');
        const leftHand = arrayFromString[leftIndex];
        arrayFromString[leftIndex] = arrayFromString[rightIndex];
        arrayFromString[rightIndex] = leftHand;
        this.data = arrayFromString.join('');
    }
}
exports.CharacterCollection = CharacterCollection;
