import { Sorter } from "./Sorter";

export class CharacterCollection extends Sorter {
    constructor(public data: string) {
        super();
    };

    get length(): number {
        return this.data.length
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase();
    }

    swap(leftIndex: number, rightIndex: number): void {
        const arrayFromString = this.data.split('');
        const leftHand = arrayFromString[leftIndex];
        arrayFromString[leftIndex] = arrayFromString[rightIndex];
        arrayFromString[rightIndex] = leftHand;
        this.data = arrayFromString.join('');
    }
}