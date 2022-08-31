import { Sort } from "./sort.class";

/**
 * Bubble sort
 * Complexity O(n^2)
 * visit https://www.bigocheatsheet.com/ for comparison
 */
export class BubbleSort extends Sort {
  sort<T>(array: T[]): T[] {
    for (let i = 0; i < array.length; i++) {
      for (let j = 1; j < array.length - i; j++)
        if (array[j] < array[j - 1]) array = this.swap(array, j, j - 1);
    }

    return array;
  }
}
