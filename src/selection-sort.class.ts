import { Sort } from "./sort.class";

/**
 * Selection sort
 * Complexity O(n^2)
 * visit https://www.bigocheatsheet.com/ for comparison
 */
export class SelectionSort extends Sort {
  sort<T>(array: T[]): T[] {
    for (let i = 0; i < array.length; i++) {
      let minIndex = this.findMinIndex<T>(i, array);
      array = this.swap(array, minIndex, i);
    }

    return array;
  }

  /**
   * returns minimum index
   * @param startIndex initial index value to start traversing
   * @param array List of type T
   * @returns Minimum index
   */
  private findMinIndex<T>(startIndex: number, array: T[]) {
    let minIndex = startIndex;
    for (let j = startIndex; j < array.length; j++)
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    return minIndex;
  }
}
