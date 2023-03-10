"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumberCollection_1 = require("./NumberCollection");
const CharacterCollection_1 = require("./CharacterCollection");
const LinkedList_1 = require("./LinkedList");
const numberCollection = new NumberCollection_1.NumberCollection([10, 3, -1, 5]);
numberCollection.sort();
console.log(numberCollection.data);
console.log('*********************');
const characterCollection = new CharacterCollection_1.CharacterCollection('mohamed');
characterCollection.sort();
console.log(characterCollection.data);
console.log('*********************');
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-300);
linkedList.add(400);
linkedList.add(-100);
linkedList.add(700);
linkedList.sort();
linkedList.print();
