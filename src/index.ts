import { BubbleSort } from "./bubble-sort.class";
import { InsertionSort } from "./insertion-sort.class";
import { SelectionSort } from "./selection-sort.class";

const bubbleSort = new BubbleSort();

const selectionSort = new SelectionSort();

const insertionSort = new InsertionSort();

console.log("Bubble sort:", bubbleSort.sort([7, 3, 1, 2, 6, 3]));

console.log("Selection sort:", selectionSort.sort([7, 3, 5, 1, 2]));

console.log("Insertion sort:", insertionSort.sort([7, 3, 2, 3, 1, 5, 8]));
