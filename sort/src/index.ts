import { NumberCollection } from "./NumberCollection";
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from "./LinkedList";

const numberCollection = new NumberCollection([10, 3, -1, 5]);
numberCollection.sort()
console.log(numberCollection.data);

console.log('*********************');


const characterCollection = new CharacterCollection('mohamed');
characterCollection.sort();
console.log(characterCollection.data);

console.log('*********************');

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-300);
linkedList.add(400);
linkedList.add(-100);
linkedList.add(700);

linkedList.sort();
linkedList.print();

