import { Sort } from "./sort.class";

/**
 * Insertion sort
 * Complexity O(n^2)
 * visit https://www.bigocheatsheet.com/ for comparison
 */
export class InsertionSort extends Sort {
  sort<T>(array: T[]): T[] {
    console.log(array);
    
    for (let i = 1; i < array.length; i++) {
      const current = array[i];
      // shift right
      let j = i - 1;
      while (j >= 0 && array[j] > current) {        
        array[j + 1] = array[j--];
      }
      array[j + 1] = current;
    }

    return array;
  }
}
