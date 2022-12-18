import { NumberCollection } from "./NumberCollection";
import { Sorter } from "./Sorter";
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from "./LinkedList";

const numberCollection = new NumberCollection([10, 3, -1, 5]);
const numberSorter = new Sorter(numberCollection);
numberSorter.sort()
console.log(numberCollection.data);

console.log('*********************');


const characterCollection = new CharacterCollection('mohamed');
const characterSorter = new Sorter(characterCollection);
characterSorter.sort();

console.log('*********************');

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-300);
linkedList.add(400);
linkedList.add(-100);
linkedList.add(700);

const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();

console.log(characterCollection.data);
